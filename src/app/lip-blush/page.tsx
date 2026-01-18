'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';

const LIP_IMAGES = [
  '/lip/lip-1.jpeg',
  '/lip/lip-2.jpeg',
  '/lip/lip-3.jpeg',
  '/lip/lip-4.jpeg',
  '/lip/lip-5.jpeg',
];

type Faq = { q: string; a: string };

const HIGHLIGHTS = [
  {
    title: '과함 없는 톤',
    desc: '얼굴 톤과 조화가 먼저입니다. 튀는 색보다 "안 어색함"을 기준으로 잡습니다.',
  },
  {
    title: '경계가 깔끔한 정돈감',
    desc: '입술 라인이 흐려 보이면 인상이 피곤해집니다. 또렷함은 "선명함"이 아니라 "정돈"에서 나옵니다.',
  },
  {
    title: '시간이 지나도 부담 없이',
    desc: '처음보다 "몇 달 뒤"가 더 중요합니다. 오래 봐도 자연스럽게 남는 결과를 우선합니다.',
  },
];

const PROCESS = [
  { title: '상담', desc: '원하는 분위기보다, 지금 얼굴에서 "정리할 지점"을 먼저 봅니다.' },
  { title: '톤/라인 기준 설정', desc: '자연스러움의 기준을 정합니다. 과한 방향은 처음부터 배제합니다.' },
  { title: '진행', desc: '긴장도를 낮추는 흐름으로 안정적으로 진행합니다.' },
  { title: '안내', desc: '유지와 정돈을 위한 핵심만 간단히 안내합니다.' },
];

const FAQS: Faq[] = [
  {
    q: '입술은 왜 더 조심해야 하나요?',
    a: '입술은 피부 중 가장 얇은 부위입니다. 경계선 처리와 톤 조절에 따라 결과물이 크게 달라지기 때문에, 충분한 경험을 갖춘 곳에서 받으시는 것이 중요합니다.',
  },
  {
    q: '자연스럽게 가능해요?',
    a: '물론입니다. 틴트처럼 은은하게 발색되어 립스틱을 바르면 더욱 선명한 컬러가 연출되고, 쌩얼에도 전혀 어색하지 않은 자연스러운 입술을 만들어드립니다.',
  },
  {
    q: '진해 보일까 봐 걱정돼요.',
    a: '자연스러운 결과가 기준입니다. 티가 나는 과한 결과는 절대 지양합니다. 본연의 입술색을 정돈하는 방향으로, 누가 봐도 자연스러운 결과를 추구합니다.',
  },
  {
    q: '아프진 않나요?',
    a: '놀랍게도 10명 중 7명은 중간에 주무시기도 합니다. 가벼운 터치로 진행하기 때문에 생각보다 훨씬 편안하게 받으실 수 있습니다.',
  },
  {
    q: '얼마나 유지되나요?',
    a: '개인차가 있지만 최소 2년 이상 유지됩니다. 피부 타입과 생활습관에 따라 달라질 수 있으며, 자연스럽게 서서히 옅어지는 방식으로 유지됩니다.',
  },
  {
    q: '관리 방법이 복잡한가요?',
    a: '처음 1~3일 정도는 뜨겁거나 매운 음식을 피해주시고, 양치질과 식사 시 입술 부위에 조금만 신경 써주시면 됩니다. 약 7일 후부터 일상생활과 화장 모두 자유롭게 하실 수 있습니다.',
  },
];

function FaqItem({ q, a, index }: Faq & { index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-border-light bg-white overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start justify-between gap-4 text-left"
      >
        <span className="text-base md:text-lg font-medium text-text-primary">
          {q}
        </span>
        <span
          className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-border-light text-text-secondary transition-transform ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-sm md:text-base text-text-secondary leading-relaxed">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function LipBlushPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-border-light">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 500px at 20% 10%, rgba(196,138,154,0.22), transparent 60%), radial-gradient(900px 500px at 80% 0%, rgba(47,93,80,0.18), transparent 55%)',
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-border-light bg-white px-3 py-1 text-sm text-text-secondary mb-5"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-pink-primary" />
            LIP TONE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight"
          >
            립 바르면 더 잘 어울리는 입술
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed"
          >
            쌩얼에도 괜히 예뻐 보이는 입술,
            <br />
            <strong className="text-text-primary font-medium">메이크업이 완성되는 느낌</strong>을 만듭니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button href="/contact" variant="primary" size="md">
              상담 문의하기
            </Button>
            <Button href="/brand" variant="outline" size="md">
              권승주의 기준 보기
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-2xl border border-border-light bg-white/70 backdrop-blur p-5"
          >
            <p className="text-sm md:text-base text-text-primary leading-relaxed">
              <span className="font-medium text-green-primary">한 줄 기준</span>
              <br />
              <span className="text-text-secondary">
                &quot;예뻐 보이는 건 순간이지만, 어색하지 않은 건 오래갑니다.&quot;
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <Section background="white">
        <div className="mb-8">
          <p className="text-sm tracking-widest text-green-primary mb-2">STANDARD</p>
          <h2 className="text-2xl md:text-3xl font-light text-text-primary">
            핵심은 색보다 인상입니다
          </h2>
          <p className="mt-2 text-sm md:text-base text-text-secondary">
            티가 나는 결과를 피하는 기준을 먼저 세웁니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-border-light bg-white p-6"
            >
              <h3 className="text-base md:text-lg font-medium text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 border border-border-light p-6"
          style={{
            background: 'linear-gradient(90deg, rgba(242,230,234,0.9), rgba(255,255,255,1))',
          }}
        >
          <p className="text-sm md:text-base text-text-primary leading-relaxed">
            <span className="font-medium">입술은 티 나면 어색해집니다.</span> 그래서 더{' '}
            <span className="font-medium">&apos;판단&apos;</span>이 중요합니다.
            <br />
            <span className="text-text-secondary">
              과함은 줄이고, 정돈감은 남겨서 오래 봐도 편안한 인상을 목표로 합니다.
            </span>
          </p>
        </motion.div>
      </Section>

      {/* Process */}
      <Section background="pink">
        <div className="mb-8">
          <p className="text-sm tracking-widest text-green-secondary mb-2">FLOW</p>
          <h2 className="text-2xl md:text-3xl font-light text-text-primary">
            진행은 간단하게, 기준은 정확하게
          </h2>
          <p className="mt-2 text-sm md:text-base text-text-secondary">
            복잡한 설명보다, 필요한 판단만 남깁니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PROCESS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">{index + 1}</span>
                </div>
                <h3 className="text-base md:text-lg font-medium text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary" size="md">
            상담 문의하기
          </Button>
          <Button href="/location" variant="outline" size="md">
            위치 확인
          </Button>
        </div>
      </Section>

      {/* Portfolio */}
      <Section background="white">
        <div className="mb-8">
          <p className="text-sm tracking-widest text-green-primary mb-2">PORTFOLIO</p>
          <h2 className="text-2xl md:text-3xl font-light text-text-primary">
            before &amp; after
          </h2>
          <p className="mt-2 text-sm md:text-base text-text-secondary">
            자연스럽고 정돈된 결과물입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LIP_IMAGES.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`입술 ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/_jjoo_kiiara/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-black rounded-full hover:scale-[1.02] transition-transform"
          >
            더 많은 작품 보러가기 (인스타그램)
          </a>
        </motion.div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              ×
            </button>
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + LIP_IMAGES.length) % LIP_IMAGES.length);
              }}
            >
              ‹
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-4xl aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={LIP_IMAGES[lightboxIndex]}
                alt={`입술 ${lightboxIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % LIP_IMAGES.length);
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ */}
      <Section background="white">
        <div className="mb-8">
          <p className="text-sm tracking-widest text-green-primary mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-light text-text-primary">
            고민이 생기는 지점은 보통 비슷합니다
          </h2>
          <p className="mt-2 text-sm md:text-base text-text-secondary">
            입술은 &apos;괜히 했다가 후회할까&apos;가 가장 큰 고민입니다. 그래서 그 걱정을 기준으로 정리해두었습니다.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={index} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 border-t border-border-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-border-light p-8 md:p-12"
            style={{
              background:
                'radial-gradient(700px 300px at 10% 30%, rgba(196,138,154,0.18), transparent 60%), radial-gradient(700px 300px at 90% 10%, rgba(47,93,80,0.14), transparent 55%), #fff',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-text-primary">
              지금의 얼굴을 조금 더 정리하고 싶다면
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-text-secondary leading-relaxed">
              입술은 색보다 인상이 먼저입니다.
              <br className="hidden md:block" />
              부담 없이 자연스럽게 정리해드립니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="md">
                상담 문의하기
              </Button>
              <Button href="/brand" variant="outline" size="md">
                브랜드 철학 보기
              </Button>
            </div>

            <p className="mt-6 text-xs text-text-secondary">
              * 표현은 과장하지 않습니다. 자연스러움은 유행이 아니라 판단에서 나옵니다.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
