'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { usePageAnalytics } from '@/hooks/useAnalytics';

const reviewImages = [
  '/review/review1.jpeg',
  '/review/review2.jpeg',
  '/review/review3.jpeg',
  '/review/review4.jpeg',
  '/review/review5.jpeg',
  '/review/review6.jpeg',
  '/review/review7.jpeg',
];

const portfolioImages = [
  '/eyebrow/woman/w.jpeg',
  '/eyebrow/man/man1.jpeg',
  '/eyebrow/woman/w1.jpeg',
  '/eyebrow/woman/w2.png',
  '/eyebrow/man/man2.jpeg',
  '/eyebrow/woman/w3.jpeg',
  '/eyebrow/woman/w4.jpeg',
  '/eyebrow/man/man3.jpeg',
  '/eyebrow/woman/w5.jpeg',
  '/eyebrow/woman/w6.jpeg',
  '/eyebrow/man/man4.jpeg',
  '/eyebrow/woman/w7.jpeg',
];

const INITIAL_DISPLAY_COUNT = 6;

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzupk_TtbiF94aW4QhqS3M8FZg4gp7xAr2SbyFW72Rby5BLxywZruPTn9E9ahKIm44jvQ/exec';

const serviceOptions = ['눈썹', '입술', '속눈썹 뷰러펌', '기타'];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.service) newErrors.service = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toLocaleString('ko-KR'),
        }),
      });
      setIsComplete(true);
    } catch {
      alert('전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            CONTACT
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
            {/* 이름 */}
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

            {/* 연락처 */}
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

            {/* 관심 시술 */}
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

            {/* 문의 내용 */}
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

            {/* 제출 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-green-primary text-white font-semibold text-base hover:bg-green-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '전송 중...' : '상담 신청하기'}
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
  );
}

function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const doubledImages = [...reviewImages, ...reviewImages];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-pink-light/30 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm tracking-widest text-green-secondary mb-2">REVIEWS</p>
        <h2 className="text-xl md:text-2xl font-light text-text-primary">
          고객 후기
        </h2>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${currentIndex * (200 + 16)}px` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ paddingLeft: '1rem' }}
        >
          {doubledImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] aspect-[3/4] relative rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`고객 후기 ${(index % reviewImages.length) + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? portfolioImages : portfolioImages.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-green-secondary mb-4">PORTFOLIO</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            작업 예시
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayedImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`작업 예시 ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
        {portfolioImages.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent text-text-primary border border-line font-medium hover:bg-neutral-50 transition-colors"
            >
              {showAll ? '접기' : '작품사진 전체 보기'}
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}

export default function Home() {
  // 페이지 방문 및 스크롤 추적
  usePageAnalytics('메인');

  return (
    <>
      {/* Hero Section with Video */}
      <section className="hero relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 z-[1]" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-[2] max-w-4xl mx-auto text-center pt-20 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-widest text-white/80 mb-6"
          >
            키아라 천안
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-white"
          >
            2026년,
            <br />
            <span className="font-medium">운세보다 확실한 변화</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            새해엔 눈썹 하나로
            <br />
            인상부터 정리하세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <Button href="/eyebrow" size="lg" trackClick trackMemo="히어로 CTA">
              눈썹 작업 보기
            </Button>
            <a
              href="/brand"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-white border border-white/50 font-semibold hover:bg-white/10 transition-colors"
            >
              브랜드 철학 보기
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* 시술 기준 */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm tracking-widest text-green-secondary mb-4"
          >
            STANDARD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-light text-text-primary mb-8"
          >
            인상은 작은 선택의 누적입니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-secondary leading-loose mb-8"
          >
            하나의 요소만으로 분위기가 완성되지는 않습니다.
            <br />
            그래서 더 조심스럽게 판단합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium text-text-primary mb-4">KIIARA STANDARD</h3>
            <p className="text-text-secondary leading-loose">
              과하지 않게,
              <br />
              시간이 지나도 부담되지 않는 인상
              <br /><br />
              유행보다 얼굴의 구조를 먼저 보고,
              <br />
              지금뿐 아니라 이후의 인상까지 고려합니다.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Brand Philosophy */}
      <Section background="white">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-green-secondary mb-4">BRAND PHILOSOPHY</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            왜 &apos;자연스러움&apos;을 기준으로 삼을까요
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary leading-loose text-center mb-12">
            &apos;자연스럽다&apos;는 말은 추상적이지만,
            <br />
            과하지 않다는 기준은 분명합니다.
            <br /><br />
            트렌드보다 개인의 얼굴 흐름을 먼저 살피고,
            <br />
            유행보다 오래 남는 인상을 선택합니다.
            <br /><br />
            티가 나는 선택은 시간이 지날수록 부담이 되기 때문에
            <br />
            결정 과정이 더욱 중요하다고 생각합니다.
          </p>

          <blockquote className="border-l-4 border-pink-primary pl-6 py-4 bg-pink-light/30">
            <p className="text-lg text-text-primary italic">
              &quot;눈에 띄는 선택보다
              <br />
              오래 봐도 편안한 판단이 중요합니다.&quot;
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Face Impression Design */}
      <section
        className="w-full border-t border-neutral-200 bg-white"
        aria-label="인상 설계"
      >
        <div className="mx-auto max-w-5xl px-4 py-16">
          {/* 헤드 카피 */}
          <div className="mb-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 text-sm tracking-wide text-neutral-500"
            >
              FACE IMPRESSION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900"
            >
              인상을 볼 때,
              <br />
              한 부분만 보지 않습니다
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg text-neutral-600"
            >
              인상은 여러 요소가 함께 만들어집니다.
              <br />
              그래서{' '}
              <strong className="text-neutral-900">
                전체 흐름을 기준으로 판단
              </strong>합니다.
            </motion.p>
          </div>

          {/* 이유 3가지 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                지금의 얼굴 흐름을
                <br />
                기준으로
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                예쁘다는 기준보다 중요한 건
                <br />
                현재의 얼굴 분위기와 조화로운지 여부입니다.
                <br />
                그래서 과한 선택은 처음부터 배제합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                시간이 지나도
                <br />
                부담되지 않게
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                결정의 기준은 지금보다 이후의 인상입니다.
                <br />
                오래 봐도 편안한 흐름을 목표로
                <br />
                선택을 돕습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                한 부분이 아닌
                <br />
                전체 조화
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                하나만 잘한다고 분위기가 정리되지 않습니다.
                <br />
                <strong className="text-neutral-900">같은 얼굴 안에서 함께 판단</strong>합니다.
              </p>
            </motion.div>
          </div>

          {/* 원장 신뢰 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-14 rounded-3xl bg-neutral-50 p-8 text-center"
          >
            <p className="text-sm tracking-wide text-neutral-500">
              WHY HERE
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-neutral-900">
              왜 이 기준이 필요한가
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600">
              선택지는 많습니다.
              <br />
              하지만 <strong className="text-neutral-900">기준을 정리해 주는 곳</strong>은 많지 않습니다.
              <br /><br />
              기술보다 먼저 얼굴의 흐름을 살피고,
              <br />
              지금의 선택이 이후에도 부담되지 않을지부터 차분히 판단합니다.
            </p>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button href="/contact" size="lg" trackClick trackMemo="인상설계 섹션 CTA">
              상담 문의하기
            </Button>
            <p className="mt-3 text-xs text-neutral-500">
              과장 없이, 기준으로 판단합니다
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio / 작업 예시 */}
      <PortfolioSection />

      {/* Artist Profile Preview */}
      <Section background="pink">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest text-green-secondary mb-4">ARTIST</p>
            <h2 className="text-2xl md:text-4xl font-light text-text-primary mb-2">
              권승주
              <br />
              <span className="text-green-primary">인상을 기준으로 판단합니다</span>
            </h2>
            <p className="text-xs text-text-secondary/70 mb-8">키아라 천안</p>

            <p className="text-text-secondary leading-loose mb-8">
              오래 일하며 알게 된 건 하나였습니다.
              <br />
              사람들은 디자인을 기억하지 않고
              <br />
              느낌을 기억한다는 것.
              <br /><br />
              그래서 저는
              <br />
              손보다 눈이 먼저 갑니다.
            </p>

            <Button href="/seungju-kwon" variant="outline">
              더 알아보기
            </Button>
          </div>

          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-green-secondary/10">
            <img
              src="/profile.jpeg"
              alt="권승주 프로필"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section background="white">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-green-secondary mb-4">MENU</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            어떤 선택을 도와드릴까요
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Eyebrow */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-line p-8 md:p-12"
          >
            <h3 className="text-xl font-medium text-green-primary mb-4">눈썹</h3>
            <p className="text-2xl text-text-primary mb-6">
              쌩얼도 화장한 것처럼
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              눈썹은 인상의 기본 흐름을 정리합니다.
              <br />
              메이크업 없이도 정돈된 느낌을 줄 수 있습니다.
            </p>
            <ul className="text-sm text-text-secondary space-y-2 mb-8">
              <li>• 각도는 인상의 방향을 정하고</li>
              <li>• 두께는 신뢰감에 영향을 주며</li>
              <li>• 컬러는 전체 분위기를 결정합니다</li>
            </ul>
            <Button href="/eyebrow" variant="outline" size="sm">
              작업 예시 보기
            </Button>
          </motion.div>

          {/* Lip Blush */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-line p-8 md:p-12"
          >
            <h3 className="text-xl font-medium text-pink-primary mb-4">입술</h3>
            <p className="text-2xl text-text-primary mb-6">
              립 바르면 더 잘 어울리는 입술
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              입술은 전체 인상의 마무리를 담당합니다.
              <br />
              메이크업과 조화로운 흐름을 만들어줍니다.
            </p>
            <ul className="text-sm text-text-secondary space-y-2 mb-8">
              <li>• 불필요한 색은 정리하고</li>
              <li>• 피부 톤과 조화를 맞추고</li>
              <li>• 시간이 지나도 부담 없는 상태로</li>
            </ul>
            <Button href="/lip-blush" variant="secondary" size="sm">
              작업 예시 보기
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* 상담 신청 폼 */}
      <ContactForm />

      {/* Recommended For */}
      <Section background="pink">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-green-secondary mb-4">FOR YOU</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            이런 분께 추천합니다
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            '기준 없이 선택하기 어려운 분',
            '과한 결과가 걱정되는 분',
            '자연스러운 흐름을 원하는 분',
            '오래 봐도 부담 없는 인상을 원하는 분',
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white p-6"
            >
              <div className="w-2 h-2 bg-green-primary rounded-full flex-shrink-0" />
              <p className="text-text-primary">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Review Carousel / 고객 후기 */}
      <ReviewCarousel />

      {/* Final CTA */}
      <Section background="green">
        <div className="text-center">
          <p className="text-white/70 text-sm tracking-widest mb-6">CONTACT</p>
          <h2 className="text-2xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            기준이 필요하다면
            <br />
            편하게 문의해 주세요
          </h2>
          <Button href="/contact" variant="secondary" size="lg" trackClick trackMemo="하단 CTA">
            상담 문의
          </Button>
        </div>
      </Section>
    </>
  );
}
