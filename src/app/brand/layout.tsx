import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "브랜드 소개",
  description: "천안자연눈썹 키아라 브랜드 철학. 유행이 아닌 얼굴에 맞는 기준, 구조적 설계로 자연스러운 인상을 만듭니다.",
  alternates: {
    canonical: "https://browartist-kwon.co.kr/brand",
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
