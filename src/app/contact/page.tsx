'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { usePageAnalytics } from '@/hooks/useAnalytics';
import { trackInquiryComplete } from '@/lib/analytics';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzupk_TtbiF94aW4QhqS3M8FZg4gp7xAr2SbyFW72Rby5BLxywZruPTn9E9ahKIm44jvQ/exec';
const serviceOptions = ['눈썹', '입술', '속눈썹 뷰러펌', '기타'];

export default function ContactPage() {
  // 페이지 방문 추적
  usePageAnalytics('/contact');

  // 문의 버튼 클릭 시 호출
  const handleInquiryClick = (type: string) => {
    trackInquiryComplete('/contact', type);
  };

  // 폼 상태
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.service) newErrors.service = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, timestamp: new Date().toLocaleString('ko-KR') }),
    });
    setIsComplete(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-light/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest text-green-secondary mb-4"
          >
            CONTACT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight"
          >
            상담 문의
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <Section background="white">
        <div className="max-w-md mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary leading-loose mb-12 text-center"
          >
            지금의 얼굴을
            <br />
            조금 더 정리하고 싶다면
            <br />
            권승주의 기준으로 판단해드립니다.
          </motion.p>

          {/* Big Buttons */}
          <div className="flex flex-col gap-4">
            <motion.a
              href="https://pf.kakao.com/_HeTkG"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleInquiryClick('카카오톡')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="flex justify-center items-center min-h-[72px] px-5 text-xl font-bold text-white bg-[#FEE500] text-[#3C1E1E] rounded-[48px] text-center leading-tight"
            >
              카카오톡 채널 문의하기
            </motion.a>

            <motion.a
              href="https://map.naver.com/p/search/%ED%82%A4%EC%95%84%EB%9D%BC%20%EC%B2%9C%EC%95%88/place/1289980492?placePath=/home"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleInquiryClick('네이버플레이스')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center min-h-[72px] px-5 text-xl font-bold text-white bg-black rounded-[48px] text-center leading-tight"
            >
              네이버 플레이스
            </motion.a>
          </div>
        </div>
      </Section>

      {/* 무료 상담 신청 폼 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm tracking-widest text-green-secondary mb-3"
            >
              FREE CONSULTATION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-light text-text-primary"
            >
              무료 상담 신청
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 text-text-secondary text-sm"
            >
              홈페이지에서 신청하시면 무료 상담을 도와드립니다.
            </motion.p>
          </div>

          {!isComplete ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
            >
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  이름 <span className="text-pink-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="이름을 입력해주세요"
                  className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-text-primary outline-none transition-colors focus:bg-white focus:border-green-primary ${
                    errors.name ? 'border-red-400' : 'border-neutral-200'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">이름을 입력해주세요.</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  연락처 <span className="text-pink-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="010-0000-0000"
                  className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-text-primary outline-none transition-colors focus:bg-white focus:border-green-primary ${
                    errors.phone ? 'border-red-400' : 'border-neutral-200'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">연락처를 입력해주세요.</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  관심 시술 <span className="text-pink-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: option })}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        formData.service === option
                          ? 'bg-green-primary text-white border-green-primary'
                          : 'bg-neutral-50 text-text-secondary border-neutral-200 hover:border-green-secondary'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {errors.service && <p className="mt-1 text-xs text-red-400">관심 시술을 선택해주세요.</p>}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  문의 내용
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="궁금한 점이 있으시면 자유롭게 남겨주세요 (선택)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-text-primary outline-none transition-colors focus:bg-white focus:border-green-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-green-primary text-white font-semibold text-base hover:bg-green-primary/90 transition-colors"
              >
                상담 신청하기
              </button>
              <p className="mt-4 text-center text-xs text-text-secondary">
                입력하신 정보는 상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-10 text-center"
            >
              <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-4">
                상담 신청이 완료되었습니다
              </h3>
              <p className="text-text-secondary leading-relaxed">
                확인 후 빠르게 연락드리겠습니다.
                <br />
                감사합니다.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Note */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-text-secondary/70 leading-relaxed">
            상담은 예약제로 운영됩니다.
            <br />
            문의 후 일정 조율을 통해 방문 상담이 진행됩니다.
            <br /><br />
            무리한 권유 없이,
            <br />
            현재 상태에서 필요한 것만 판단해드립니다.
          </p>
        </div>
      </Section>

      {/* Final Message */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white leading-relaxed">
            자연스러움은 우연이 아니라
            <br />
            판단의 결과입니다.
          </h2>
        </div>
      </Section>
    </>
  );
}
