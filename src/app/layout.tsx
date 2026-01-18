import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "키아라 천안 | 천안 눈썹문신 · 자연결 반영구 전문",
  description: "천안 키아라 눈썹문신 전문샵. 자연결 눈썹·입술 반영구, 얼굴형과 톤에 맞춘 맞춤 디자인 시술.",
  keywords: ["키아라 천안", "천안 키아라", "천안 눈썹문신 키아라", "천안 반영구", "천안 눈썹문신"],
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://browartist-kwon.co.kr/",
  },
  openGraph: {
    title: "키아라 천안 | 천안 눈썹문신 · 자연결 반영구",
    description: "천안 키아라 눈썹문신 전문. 자연스럽고 과하지 않은 기준 있는 반영구 시술.",
    url: "https://browartist-kwon.co.kr/",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": "f0feb2db0db1685e6fe51247bfa2568d4b3b21c",
    },
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
