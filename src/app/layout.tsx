import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "천안자연눈썹 키아라 | 반영구 눈썹 · 인상 설계 전문",
    template: "%s | 천안자연눈썹 키아라",
  },
  description: "천안자연눈썹 전문 키아라. 천안눈썹문신, 천안반영구, 자연눈썹, 남자눈썹까지. 얼굴형에 맞는 자연스러운 눈썹 인상 설계. 천안시 서북구 위치.",
  keywords: ["천안자연눈썹", "천안눈썹문신", "천안반영구", "천안 자연눈썹", "천안 눈썹문신", "천안 반영구 눈썹", "천안 남자눈썹", "키아라 천안", "천안 키아라", "천안 눈썹 반영구", "천안입술"],
  icons: {
    icon: { url: "/favicon.svg?v=3", type: "image/svg+xml" },
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://browartist-kwon.co.kr/",
  },
  openGraph: {
    siteName: "천안자연눈썹 키아라",
    title: "천안자연눈썹 키아라 | 반영구 눈썹 · 인상 설계 전문",
    description: "천안자연눈썹 전문 키아라. 천안반영구, 자연눈썹, 남자눈썹까지. 얼굴형에 맞는 자연스러운 눈썹 인상 설계.",
    url: "https://browartist-kwon.co.kr/",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google: "tSQvySgJkJUBc41PGoCyhoHyDtQWnI4lkRA5RvFphhs",
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1407512400778665');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1407512400778665&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
