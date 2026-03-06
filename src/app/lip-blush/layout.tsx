import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "천안입술반영구 · 천안립블러쉬",
  description: "천안입술반영구 키아라. 자연스러운 톤 보정, 입술 라인 정리. 과하지 않은 립블러쉬 전문. 천안 반영구 입술.",
  keywords: ["천안입술반영구", "천안립블러쉬", "천안 입술반영구", "천안 립블러쉬", "천안 반영구 입술"],
  alternates: {
    canonical: "https://browartist-kwon.co.kr/lip-blush",
  },
  openGraph: {
    title: "천안입술반영구 · 천안립블러쉬 | 키아라",
    description: "천안입술반영구 키아라. 자연스러운 톤 보정, 입술 라인 정리. 과하지 않은 립블러쉬 전문.",
    url: "https://browartist-kwon.co.kr/lip-blush",
  },
};

export default function LipBlushLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
