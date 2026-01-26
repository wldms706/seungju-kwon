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

// 세션 데이터 저장소 (한 세션의 모든 행동을 모음)
interface SessionData {
  sessionId: string;
  date: string;
  source: string;
  campaign: string;
  pages: string[];        // 방문한 페이지들
  maxScroll: number;      // 최대 스크롤 깊이
  clicked: boolean;       // CTA 클릭 여부
  inquiry: boolean;       // 문의 여부
  memos: string[];        // 메모들
  sent: boolean;          // 이미 전송했는지 여부
}

let sessionData: SessionData | null = null;

function getSessionData(): SessionData {
  if (!sessionData) {
    const { 유입경로, 광고명 } = getTrafficSource();
    sessionData = {
      sessionId: getSessionId(),
      date: getTodayDate(),
      source: 유입경로,
      campaign: 광고명,
      pages: [],
      maxScroll: 0,
      clicked: false,
      inquiry: false,
      memos: [],
      sent: false,
    };
  }
  return sessionData;
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
    try {
      const referrer = new URL(document.referrer);
      if (referrer.hostname.includes('instagram')) {
        유입경로 = '인스타';
      } else if (referrer.hostname.includes('naver')) {
        유입경로 = '네이버';
      } else if (referrer.hostname.includes('google')) {
        유입경로 = '구글';
      }
    } catch {
      // referrer 파싱 실패 시 무시
    }
  }

  return {
    유입경로,
    광고명: utm_campaign || '-',
  };
}

// 오늘 날짜+시간 포맷 (M/D HH:MM 형식)
function getTodayDate(): string {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = today.getHours().toString().padStart(2, '0');
  const minutes = today.getMinutes().toString().padStart(2, '0');
  return `${month}/${day} ${hours}:${minutes}`;
}

// 페이지 방문 기록
export function trackPageVisit(page: string): void {
  const data = getSessionData();
  if (!data.pages.includes(page)) {
    data.pages.push(page);
  }
}

// 스크롤 깊이 기록
export function trackScroll(depth: number): void {
  const data = getSessionData();
  if (depth > data.maxScroll) {
    data.maxScroll = depth;
  }
}

// CTA 클릭 기록 (전송하지 않고 데이터만 기록)
export function trackCTAClick(_페이지: string, 메모?: string): void {
  const data = getSessionData();
  data.clicked = true;
  if (메모 && !data.memos.includes(메모)) {
    data.memos.push(메모);
  }
  // 페이지 이탈 시 최종 전송됨
}

// 문의 완료 기록
export function trackInquiryComplete(_페이지: string, 메모?: string): void {
  const data = getSessionData();
  data.clicked = true;
  data.inquiry = true;
  if (메모 && !data.memos.includes(메모)) {
    data.memos.push(메모);
  }

  // Meta Pixel 전환 이벤트 전송
  if (typeof window !== 'undefined' && (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq) {
    const fbq = (window as typeof window & { fbq: (...args: unknown[]) => void }).fbq;
    // Lead 이벤트: 잠재고객 확보 (문의 클릭)
    fbq('track', 'Lead', {
      content_name: 메모 || '문의',
      content_category: _페이지,
    });
  }
  // 페이지 이탈 시 최종 전송됨
}

// 세션 데이터를 구글 시트로 전송 (한 세션당 한 번만)
export function sendSessionData(): void {
  if (!GOOGLE_SHEET_URL || !sessionData || sessionData.sent) {
    return;
  }

  // 전송 완료 표시
  sessionData.sent = true;
  const data = sessionData;

  // URL 파라미터 생성 (이모지 대신 텍스트 사용)
  const params = new URLSearchParams();
  params.append('sessionId', data.sessionId);
  params.append('date', data.date);
  params.append('source', data.source);
  params.append('campaign', data.campaign);
  params.append('pages', data.pages.join(' > '));
  params.append('maxScroll', String(data.maxScroll));
  params.append('clicked', data.clicked ? 'O' : 'X');
  params.append('inquiry', data.inquiry ? 'O' : 'X');
  params.append('memo', data.memos.join(', '));

  const url = `${GOOGLE_SHEET_URL}?${params.toString()}`;

  // 이미지 태그로 GET 요청 (가장 확실한 방법)
  const img = new Image();
  img.src = url;
}

// 스크롤 깊이 추적 (기존 호환성 유지)
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
        trackScroll(depth);  // 세션 데이터에 기록
        callback(depth);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}

// 페이지 떠날 때 전송 설정 (사이트 완전히 이탈 시에만)
export function setupBeforeUnload(): void {
  if (typeof window === 'undefined') return;

  const handleUnload = () => {
    sendSessionData();
  };

  // beforeunload: 브라우저/탭 닫을 때
  window.addEventListener('beforeunload', handleUnload);
  // pagehide: 모바일에서 페이지 떠날 때 (더 확실함)
  window.addEventListener('pagehide', handleUnload);
}

// 기존 sendBehaviorLog 함수 (호환성 유지 - 이제 세션에 기록만 함)
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

export async function sendBehaviorLog(log: Partial<BehaviorLog>): Promise<boolean> {
  // 페이지 방문 기록
  if (log.페이지) {
    trackPageVisit(log.페이지);
  }
  return true;
}
