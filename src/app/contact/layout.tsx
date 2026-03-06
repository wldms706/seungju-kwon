import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 문의",
  description: "천안자연눈썹 키아라 무료 상담 신청. 천안자연눈썹, 천안입술반영구 상담 예약. 천안시 서북구 위치.",
  alternates: {
    canonical: "https://browartist-kwon.co.kr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
