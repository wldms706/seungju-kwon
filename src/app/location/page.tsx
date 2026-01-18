'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function LocationPage() {
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
            LOCATION
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight mb-6"
          >
            오시는 길 | 키아라 천안
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            키아라 천안은 예약제로 운영되며, 방문 전 상담을 통해 시술 방향을 먼저 정리합니다.
            <br />
            천안에서 자연스러운 반영구를 찾는 분들이 편하게 방문할 수 있도록 안내합니다.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary leading-loose mb-16"
          >
            천안 불당동에 위치한 공간에서
            <br />
            복잡한 설명 없이,
            <br />
            차분하게 얼굴을 정리합니다.
            <br /><br />
            시술은 짧지만
            <br />
            결과는 오래 남기 위해
            <br />
            모든 과정은 안정적으로 진행됩니다.
          </motion.p>
        </div>
      </Section>

      {/* Space Image Placeholder */}
      <Section background="pink">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-white flex items-center justify-center"
            >
              <p className="text-text-secondary/50 text-sm">공간 이미지 1</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-white flex items-center justify-center"
            >
              <p className="text-text-secondary/50 text-sm">공간 이미지 2</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Location Info */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-green-secondary mb-4">INFO</p>
            <h2 className="text-2xl md:text-3xl font-light text-text-primary">
              오시는 길
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pink-light/30 p-8"
            >
              <h3 className="text-lg font-medium text-green-primary mb-4">주소</h3>
              <p className="text-text-secondary leading-relaxed">
                충청남도 천안시 서북구 불당동
                <br />
                <span className="text-sm text-text-secondary/70">(상세 주소는 예약 시 안내)</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-pink-light/30 p-8"
            >
              <h3 className="text-lg font-medium text-green-primary mb-4">운영 안내</h3>
              <p className="text-text-secondary leading-relaxed">
                완전 예약제로 운영됩니다.
                <br />
                <span className="text-sm text-text-secondary/70">상담 후 일정 조율</span>
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Naver Place */}
      <Section background="pink">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-green-secondary mb-4">NAVER PLACE</p>
            <h2 className="text-2xl md:text-3xl font-light text-text-primary mb-4">
              네이버 플레이스에서
              <br />
              더 자세히 확인하세요
            </h2>
            <p className="text-text-secondary mb-8">
              리뷰, 사진, 상세 정보를 한눈에 볼 수 있습니다.
            </p>
            <Button
              href="https://naver.me/Gq8q5qTZ"
              variant="primary"
              size="lg"
            >
              네이버 플레이스 바로가기
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            방문 상담을
            <br />
            원하신다면
          </h2>
          <Button href="/contact" variant="secondary" size="lg">
            상담 문의
          </Button>
        </div>
      </Section>
    </>
  );
}
