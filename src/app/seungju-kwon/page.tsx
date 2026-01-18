'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function SeungjuKwonPage() {
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
            ARTIST PROFILE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight"
          >
            <span className="inline-flex items-baseline gap-2">
              권승주
              <span className="text-lg md:text-xl text-green-secondary font-normal">KIIARA</span>
            </span>
            <br />
            <span className="text-green-primary">눈썹·수지 인상 설계</span>
          </motion.h1>
        </div>
      </section>

      {/* Profile Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-pink-light/30 overflow-hidden"
          >
            <Image
              src="/profile.jpeg"
              alt="권승주 프로필"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-text-secondary leading-loose mb-8">
              오래 시술을 해오며 알게 된 건 하나였습니다.
              <br />
              사람들은 디자인을 기억하지 않고
              <br />
              느낌을 기억한다는 것.
              <br /><br />
              그래서 저는
              <br />
              손보다 눈이 먼저 가는 시술을 합니다.
              <br /><br />
              얼굴을 보고,
              <br />
              지금보다 더 나아질 지점을 판단하고,
              <br />
              원래 내 얼굴 같게 정리합니다.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="pink">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-green-secondary mb-4">PHILOSOPHY</p>
            <h2 className="text-2xl md:text-3xl font-light text-text-primary">
              시술 철학
            </h2>
          </div>

          <div className="space-y-6">
            {[
              '과함을 피하는 이유',
              '유행을 바로 쓰지 않는 이유',
              '얼굴마다 다른 기준을 적용하는 이유',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white p-6"
              >
                <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">{index + 1}</span>
                </div>
                <p className="text-text-primary">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-lg text-text-secondary mt-12"
          >
            이 모든 판단의 시작은
            <br />
            <span className="text-green-primary font-medium">"이 얼굴에 지금 필요한가?"</span> 입니다.
          </motion.p>
        </div>
      </Section>

      {/* Background */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-text-secondary/70">
            권승주는 키아라 체인에서의 경험을 바탕으로
            <br />
            현재는 개인 기준 중심의 시술을 진행합니다.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            권승주의 기준으로
            <br />
            판단받고 싶다면
          </h2>
          <Button href="/contact" variant="secondary" size="lg">
            상담 문의
          </Button>
        </div>
      </Section>
    </>
  );
}
