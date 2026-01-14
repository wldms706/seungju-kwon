import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">권승주</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              눈썹·수지 인상 설계
              <br />
              천안 불당동
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/90">MENU</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/brand" className="text-sm text-white/70 hover:text-white transition-colors">
                BRAND
              </Link>
              <Link href="/seungju-kwon" className="text-sm text-white/70 hover:text-white transition-colors">
                SEUNGJOO KWON
              </Link>
              <Link href="/eyebrow" className="text-sm text-white/70 hover:text-white transition-colors">
                EYEBROW
              </Link>
              <Link href="/lip-blush" className="text-sm text-white/70 hover:text-white transition-colors">
                LIP BLUSH
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/90">CONTACT</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              천안시 서북구 불당동
              <br />
              <br />
              <Link href="/contact" className="text-pink-primary hover:text-white transition-colors">
                상담 문의하기 →
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} 권승주. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            눈썹·수지 인상 설계 전문
          </p>
        </div>
      </div>
    </footer>
  );
}
