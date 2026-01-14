import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "키아라 천안점 · 권승주 | 눈썹·수지 인상 설계 - 천안 불당동",
  description: "인상은 감이 아니라 기준으로 설계됩니다. 권승주는 유행보다 얼굴을 먼저 봅니다. 천안 불당동 눈썹 문신, 수지 전문.",
  keywords: ["키아라 천안점", "천안 눈썹", "불당동 눈썹 문신", "천안 수지", "자연눈썹", "인상 설계", "권승주"],
  openGraph: {
    title: "키아라 천안점 · 권승주 | 눈썹·수지 인상 설계",
    description: "인상은 감이 아니라 기준으로 설계됩니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
