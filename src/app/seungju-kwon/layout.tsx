import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "권승주 원장 소개",
  description: "천안자연눈썹 키아라 권승주 원장. 얼굴형·골격 분석 기반 눈썹 인상 설계 전문가.",
  alternates: {
    canonical: "https://browartist-kwon.co.kr/seungju-kwon",
  },
};

export default function SeungjuKwonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
