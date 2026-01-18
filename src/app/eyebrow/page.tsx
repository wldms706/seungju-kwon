'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';

const womanImages = [
  '/eyebrow/woman/w.jpeg',
  '/eyebrow/woman/w1.jpeg',
  '/eyebrow/woman/w2.png',
  '/eyebrow/woman/w3.jpeg',
  '/eyebrow/woman/w4.jpeg',
  '/eyebrow/woman/w5.jpeg',
  '/eyebrow/woman/w6.jpeg',
  '/eyebrow/woman/w7.jpeg',
];

const manImages = [
  '/eyebrow/man/man1.jpeg',
  '/eyebrow/man/man2.jpeg',
  '/eyebrow/man/man3.jpeg',
  '/eyebrow/man/man4.jpeg',
];

const lashImages = [
  '/eyebrow/lash/KakaoTalk_Photo_2026-01-12-12-52-06-21.jpeg',
  '/eyebrow/lash/KakaoTalk_Photo_2026-01-12-12-52-06-22.jpeg',
  '/eyebrow/lash/KakaoTalk_Photo_2026-01-12-12-52-06-23.jpeg',
  '/eyebrow/lash/KakaoTalk_Photo_2026-01-12-12-52-06-24.jpeg',
  '/eyebrow/lash/KakaoTalk_Photo_2026-01-12-12-52-06-25.jpeg',
];

export default function EyebrowPage() {
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
            BROW DESIGN
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight mb-6"
          >
            쌩얼도 화장한 것처럼
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            눈썹 하나로 인상이 달라집니다.
            <br />
            메이크업 없이도 정돈된 얼굴을 만듭니다.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary leading-loose text-center mb-16"
          >
            눈썹 하나로 사람이 달라 보이는 이유는
            <br />
            그 위치와 방향이
            <br />
            얼굴 전체 인상을 결정하기 때문입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-center text-text-secondary mb-8">
              권승주의 눈썹 기준은 단순합니다.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Standards */}
      <Section background="pink">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: '각도',
              subtitle: '인상을 바꾸고',
              desc: '눈썹의 각도는 강한 인상과 부드러운 인상을 결정합니다. 얼굴형과 눈의 위치에 맞춰 설계합니다.',
            },
            {
              title: '두께',
              subtitle: '신뢰를 만들며',
              desc: '너무 얇으면 예민해 보이고, 너무 두꺼우면 답답해 보입니다. 적정 두께가 신뢰감을 줍니다.',
            },
            {
              title: '컬러',
              subtitle: '나이를 결정합니다',
              desc: '눈썹 색이 진하면 강해 보이고, 연하면 흐릿해 보입니다. 피부톤과 머리색에 맞춰 조절합니다.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-light">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-medium text-green-primary mb-2">{item.title}</h3>
              <p className="text-pink-primary text-sm mb-4">{item.subtitle}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Conclusion */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary leading-loose"
          >
            그래서 눈썹은
            <br />
            유행 디자인이 아니라
            <br />
            <span className="text-green-primary font-medium">얼굴 구조에 맞춰 설계</span>되어야 합니다.
          </motion.p>
        </div>
      </Section>

      {/* 여자 눈썹 갤러리 */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-center text-text-primary mb-12"
          >
            여자 눈썹
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {womanImages.map((src, index) => (
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
                  alt={`여자 눈썹 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 남자 눈썹 갤러리 */}
      <Section background="pink">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-center text-text-primary mb-12"
          >
            남자 눈썹
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {manImages.map((src, index) => (
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
                  alt={`남자 눈썹 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 속눈썹 뷰러펌 갤러리 */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-center text-text-primary mb-12"
          >
            속눈썹 뷰러펌
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {lashImages.map((src, index) => (
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
                  alt={`속눈썹 뷰러펌 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 인스타그램 CTA */}
      <Section background="pink">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-text-primary mb-6"
          >
            더 많은 작품 보러가기
          </motion.h2>
          <motion.a
            href="https://www.instagram.com/_jjoo_kiiara/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-black rounded-full"
          >
            인스타그램
          </motion.a>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            내 얼굴에 맞는
            <br />
            눈썹을 찾고 싶다면
          </h2>
          <Button href="/contact" variant="secondary" size="lg">
            상담 문의
          </Button>
        </div>
      </Section>
    </>
  );
}
