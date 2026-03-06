import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "천안자연눈썹 · 반영구 눈썹",
  description: "천안자연눈썹 키아라. 자연눈썹, 콤보눈썹, 남자눈썹까지. 얼굴형·골격에 맞춘 자연스러운 눈썹 인상 설계 전문. 천안 반영구 눈썹.",
  keywords: ["천안자연눈썹", "천안반영구눈썹", "천안 자연눈썹", "천안 남자눈썹", "천안 콤보눈썹", "천안 반영구"],
  alternates: {
    canonical: "https://browartist-kwon.co.kr/eyebrow",
  },
  openGraph: {
    title: "천안자연눈썹 · 반영구 눈썹 | 키아라",
    description: "천안자연눈썹 키아라. 자연눈썹, 콤보눈썹, 남자눈썹까지. 얼굴형에 맞춘 자연스러운 눈썹 인상 설계.",
    url: "https://browartist-kwon.co.kr/eyebrow",
  },
};

export default function EyebrowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
