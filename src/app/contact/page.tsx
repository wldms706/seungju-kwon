'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';

export default function ContactPage() {
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
