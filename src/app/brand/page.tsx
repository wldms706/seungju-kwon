'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function BrandPage() {
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
            BRAND PHILOSOPHY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight"
          >
            왜 자연스러움을 고집하나요
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-lg text-text-secondary leading-loose text-center">
              자연스럽다는 말은 모호하지만,
              <br />
              과하지 않다는 기준은 분명합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-text-secondary leading-loose text-center">
              트렌드보다 얼굴의 구조를 먼저 보고,
              <br />
              유행보다 시간이 지나도 남는 인상을 선택합니다.
              <br /><br />
              티가 나면 실패인 영역이기 때문에
              <br />
              더욱 판단이 중요합니다.
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-l-4 border-pink-primary pl-8 py-6 bg-pink-light/30 my-16"
          >
            <p className="text-xl md:text-2xl text-text-primary italic leading-relaxed">
              "예뻐 보이는 건 순간이지만,
              <br />
              어색하지 않은 건 오래갑니다."
            </p>
          </motion.blockquote>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="pink">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-green-secondary mb-4">CORE VALUES</p>
          <h2 className="text-2xl md:text-3xl font-light text-text-primary">
            브랜드의 기준
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: '기준', desc: '유행이 아닌 얼굴에 맞는 기준' },
            { title: '판단', desc: '지금 필요한지 먼저 판단' },
            { title: '설계', desc: '감이 아닌 구조적 설계' },
            { title: '자연스러움', desc: '티 나지 않는 정리' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-primary/10 rounded-full flex items-center justify-center">
                <span className="text-green-primary text-2xl font-light">{index + 1}</span>
              </div>
              <h3 className="text-lg font-medium text-green-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center">
          <p className="text-text-secondary mb-8">
            권승주의 기준이 궁금하시다면
          </p>
          <Button href="/contact" size="lg">
            상담 문의
          </Button>
        </div>
      </Section>
    </>
  );
}
