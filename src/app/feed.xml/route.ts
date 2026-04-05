export async function GET() {
  const baseUrl = "https://browartist-kwon.co.kr";

  const pages = [
    { url: "/", title: "천안자연눈썹 키아라 | 반영구 눈썹 · 인상 설계 전문", desc: "천안자연눈썹 전문 키아라. 천안반영구, 자연눈썹, 남자눈썹까지. 얼굴형에 맞는 자연스러운 눈썹 인상 설계." },
    { url: "/eyebrow", title: "천안자연눈썹 · 반영구 눈썹", desc: "천안자연눈썹 키아라. 자연눈썹, 콤보눈썹, 남자눈썹까지. 얼굴형·골격에 맞춘 자연스러운 눈썹 인상 설계 전문." },
    { url: "/lip-blush", title: "천안입술반영구 · 천안립블러쉬", desc: "천안입술반영구 키아라. 자연스러운 톤 보정, 입술 라인 정리. 과하지 않은 립블러쉬 전문." },
    { url: "/brand", title: "브랜드 소개", desc: "천안자연눈썹 키아라 브랜드 철학. 유행이 아닌 얼굴에 맞는 기준, 구조적 설계로 자연스러운 인상을 만듭니다." },
    { url: "/seungju-kwon", title: "권승주 원장 소개", desc: "천안자연눈썹 키아라 권승주 원장. 얼굴형·골격 분석 기반 눈썹 인상 설계 전문가." },
    { url: "/contact", title: "상담 문의", desc: "천안자연눈썹 키아라 무료 상담 신청. 천안자연눈썹, 천안입술반영구 상담 예약." },
    { url: "/location", title: "오시는 길", desc: "천안자연눈썹 키아라 위치 안내. 천안시 서북구 불당동." },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>천안자연눈썹 키아라</title>
    <link>${baseUrl}</link>
    <description>천안자연눈썹 전문 키아라. 천안반영구, 자연눈썹, 남자눈썹까지. 얼굴형에 맞는 자연스러운 눈썹 인상 설계.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${pages
  .map(
    (page) => `    <item>
      <title>${page.title}</title>
      <link>${baseUrl}${page.url}</link>
      <description>${page.desc}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
