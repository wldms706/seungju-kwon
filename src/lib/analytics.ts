// 구글 시트 유입 행동 로그 연동
// 배포 후 받은 Google Apps Script 웹앱 URL을 여기에 입력하세요
const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || '';

// 세션 ID 생성 (같은 방문자 식별용)
function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sessionId = sessionStorage.getItem('kiiara_session_id');
  if (!sessionId) {
    sessionId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    sessionStorage.setItem('kiiara_session_id', sessionId);
  }
  return sessionId;
}

export interface BehaviorLog {
  날짜?: string;
  유입경로: string;
  광고명: string;
  페이지: string;
  행동단계: string;
  버튼클릭: '✅' | '❌';
  문의여부: '✅' | '❌';
  메모?: string;
  sessionId?: string;
}

// 유입경로 파라미터에서 정보 추출
export function getTrafficSource(): { 유입경로: string; 광고명: string } {
  if (typeof window === 'undefined') {
    return { 유입경로: '직접유입', 광고명: '-' };
  }

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get('utm_source') || '';
  const utm_campaign = params.get('utm_campaign') || '';
  const utm_medium = params.get('utm_medium') || '';

  // 유입경로 판별
  let 유입경로 = '직접유입';
  if (utm_source.includes('instagram') || utm_medium === 'instagram') {
    유입경로 = '인스타광고';
  } else if (utm_source.includes('naver')) {
    유입경로 = '네이버광고';
  } else if (utm_source.includes('google')) {
    유입경로 = '구글광고';
  } else if (utm_medium === 'retarget' || utm_medium === 'remarketing') {
    유입경로 = '리타겟';
  } else if (document.referrer) {
    const referrer = new URL(document.referrer);
    if (referrer.hostname.includes('instagram')) {
      유입경로 = '인스타';
    } else if (referrer.hostname.includes('naver')) {
      유입경로 = '네이버';
    } else if (referrer.hostname.includes('google')) {
      유입경로 = '구글';
    }
  }

  return {
    유입경로,
    광고명: utm_campaign || '-',
  };
}

// 오늘 날짜 포맷 (M/D 형식)
function getTodayDate(): string {
  const today = new Date();
  return `${today.getMonth() + 1}/${today.getDate()}`;
}

// 구글 시트에 로그 전송
export async function sendBehaviorLog(log: Partial<BehaviorLog>): Promise<boolean> {
  if (!GOOGLE_SHEET_URL) {
    console.warn('Google Sheet URL이 설정되지 않았습니다.');
    return false;
  }

  const { 유입경로, 광고명 } = getTrafficSource();

  const fullLog: BehaviorLog = {
    날짜: getTodayDate(),
    유입경로,
    광고명,
    페이지: typeof window !== 'undefined' ? window.location.pathname : '',
    행동단계: '',
    버튼클릭: '❌',
    문의여부: '❌',
    메모: '',
    ...log,
  };

  try {
    // 영문 키로 매핑 (Google Apps Script 호환성)
    const params = new URLSearchParams();
    params.append('sessionId', getSessionId());
    params.append('date', fullLog.날짜 || '');
    params.append('source', fullLog.유입경로);
    params.append('campaign', fullLog.광고명);
    params.append('page', fullLog.페이지);
    params.append('action', fullLog.행동단계);
    params.append('clicked', fullLog.버튼클릭);
    params.append('inquiry', fullLog.문의여부);
    params.append('memo', fullLog.메모 || '');

    await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors',
    });

    return true;
  } catch (error) {
    console.error('행동 로그 전송 실패:', error);
    return false;
  }
}

// 스크롤 깊이 추적
export function trackScrollDepth(callback: (depth: number) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const depths = [25, 50, 75, 100];
  const reached = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    depths.forEach((depth) => {
      if (scrollPercent >= depth && !reached.has(depth)) {
        reached.add(depth);
        callback(depth);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}

// CTA 버튼 클릭 추적
export function trackCTAClick(페이지: string, 메모?: string): void {
  sendBehaviorLog({
    페이지,
    행동단계: 'CTA클릭',
    버튼클릭: '✅',
    메모,
  });
}

// 문의 완료 추적
export function trackInquiryComplete(페이지: string, 메모?: string): void {
  sendBehaviorLog({
    페이지,
    행동단계: 'CTA클릭',
    버튼클릭: '✅',
    문의여부: '✅',
    메모,
  });
}
