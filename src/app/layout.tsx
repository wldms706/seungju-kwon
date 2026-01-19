import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "키아라 천안 | 천안 눈썹문신 · 네추럴브로우 디자인 반영구 전문",
  description: "천안 키아라 눈썹문신 전문샵. 네추럴브로우 디자인 눈썹·입술 반영구, 얼굴형과 톤에 맞춘 맞춤 디자인 시술.",
  keywords: ["키아라 천안", "천안 키아라", "천안 눈썹문신 키아라", "천안 반영구", "천안 눈썹문신"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://browartist-kwon.co.kr/",
  },
  openGraph: {
    title: "키아라 천안 | 천안 눈썹문신 · 네추럴브로우 디자인 반영구",
    description: "천안 키아라 눈썹문신 전문. 자연스럽고 과하지 않은 기준 있는 반영구 시술.",
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
