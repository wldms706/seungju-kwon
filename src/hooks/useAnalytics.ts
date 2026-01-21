'use client';

import { useEffect, useRef } from 'react';
import { trackPageVisit, trackScrollDepth, setupBeforeUnload } from '@/lib/analytics';

// 전역으로 한 번만 설정
let isUnloadSetup = false;

// 페이지 방문 및 스크롤 추적 훅
export function usePageAnalytics(페이지?: string) {
  const hasTrackedVisit = useRef(false);

  useEffect(() => {
    const currentPage = 페이지 || window.location.pathname;

    // 페이지 방문 기록 (세션 데이터에 추가)
    if (!hasTrackedVisit.current) {
      hasTrackedVisit.current = true;
      trackPageVisit(currentPage);
    }

    // 페이지 떠날 때 전송 설정 (한 번만)
    if (!isUnloadSetup) {
      isUnloadSetup = true;
      setupBeforeUnload();
    }

    // 스크롤 깊이 추적
    const cleanup = trackScrollDepth(() => {
      // trackScrollDepth 내부에서 세션 데이터에 기록됨
    });

    return cleanup;
  }, [페이지]);
}
