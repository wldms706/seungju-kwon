import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "천안자연눈썹 키아라 위치 안내. 천안시 서북구. 주차 가능. 천안자연눈썹, 천안반영구 전문.",
  alternates: {
    canonical: "https://browartist-kwon.co.kr/location",
  },
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
