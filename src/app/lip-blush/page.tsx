'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';

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
    q: '입술문신은 왜 더 조심해야 하나요?',
    a: '입술은 작은 차이가 인상 전체를 크게 바꿉니다. 그래서 "예쁜 색"보다 "어색하지 않음"이 먼저입니다.',
  },
  {
    q: '자연스럽게 가능해요?',
    a: '자연스럽다는 말은 모호하지만, 과하지 않다는 기준은 분명합니다. 톤·경계·전체 밸런스를 기준으로 정돈합니다.',
  },
  {
    q: '진해 보일까 봐 걱정돼요.',
    a: '그 걱정이 정상입니다. 입술은 과해 보이면 되돌리기 어렵기 때문에, 처음부터 "부담 없는 방향"을 우선합니다.',
  },
  {
    q: '통증이 많이 아픈 편인가요?',
    a: '통증의 강도는 개인차가 있지만, "긴장"이 더 크게 느껴지기도 합니다. 과정은 최대한 안정적으로 진행합니다.',
  },
  {
    q: '얼마나 유지되나요?',
    a: '피부 컨디션과 생활습관에 따라 개인차가 큽니다. 중요한 건 "처음"보다 "시간이 지난 뒤의 자연스러움"입니다.',
  },
  {
    q: '관리 방법이 복잡한가요?',
    a: '복잡하게 만들지 않습니다. 꼭 필요한 관리만 간단히 안내하고, 무리 없는 루틴을 권장합니다.',
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
            입술문신
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight"
          >
            입술은 더 섬세해야 합니다
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed"
          >
            입술은 작은 차이로도 인상이 크게 바뀌는 영역입니다.
            <br className="hidden md:block" />
            그래서 &apos;채우는&apos; 방식보다{' '}
            <span className="text-text-primary font-medium">정리하는 기준</span>을 먼저 세웁니다.
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
            입술문신의 핵심은 &apos;톤&apos;보다 &apos;인상&apos;입니다
          </h2>
          <p className="mt-2 text-sm md:text-base text-text-secondary">
            권승주는 &apos;티가 나는 결과&apos;를 피하는 기준을 먼저 세웁니다.
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
              입술은 &apos;색&apos;보다 &apos;인상&apos;이 먼저입니다.
              <br className="hidden md:block" />
              권승주의 기준으로, 부담 없이 자연스럽게 정리해드립니다.
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
              * 표현은 과장하지 않습니다. 자연스러움은 &apos;유행&apos;이 아니라 &apos;판단&apos;에서 나옵니다.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
