'use client';

import { useEffect, useRef } from 'react';
import { sendBehaviorLog, trackScrollDepth } from '@/lib/analytics';

// 페이지 방문 및 스크롤 추적 훅
export function usePageAnalytics(페이지?: string) {
  const hasTrackedVisit = useRef(false);
  const trackedScrollDepths = useRef(new Set<number>());

  useEffect(() => {
    const currentPage = 페이지 || window.location.pathname;

    // 페이지 방문 로그 (한 번만)
    if (!hasTrackedVisit.current) {
      hasTrackedVisit.current = true;
      sendBehaviorLog({
        페이지: currentPage,
        행동단계: '페이지진입',
      });
    }

    // 스크롤 깊이 추적
    const cleanup = trackScrollDepth((depth) => {
      if (!trackedScrollDepths.current.has(depth)) {
        trackedScrollDepths.current.add(depth);
        sendBehaviorLog({
          페이지: currentPage,
          행동단계: `스크롤${depth}%`,
        });
      }
    });

    return cleanup;
  }, [페이지]);
}
