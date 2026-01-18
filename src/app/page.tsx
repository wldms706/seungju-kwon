'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';

const reviewImages = [
  '/review/review1.jpeg',
  '/review/review2.jpeg',
  '/review/review3.jpeg',
  '/review/review4.jpeg',
  '/review/review5.jpeg',
  '/review/review6.jpeg',
  '/review/review7.jpeg',
];

export default function Home() {
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
            천안 눈썹문신 전문, <span className="font-medium">키아라 천안</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            키아라 천안은 천안에서 자연결 눈썹문신과 입술 반영구를 전문으로 하는 프라이빗 스튜디오입니다.
            <br />
            과하지 않게, 시간이 지나도 어색하지 않은 결과를 기준으로 디자인합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <Button href="/contact" size="lg">
              상담/예약 문의하기
            </Button>
            <a
              href="/eyebrow"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-white border border-white/50 font-semibold hover:bg-white/10 transition-colors"
            >
              작업 방식 보기
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
            인상이 달라지면, 일이 풀립니다.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-secondary leading-loose mb-8"
          >
            눈썹 하나로 기분이 바뀌고
            <br />
            하루가 달라집니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium text-text-primary mb-4">키아라 천안의 기준</h3>
            <p className="text-text-secondary leading-loose">
              과하지 않게,
              <br />
              시간이 지나도 자연스러운 인상.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Brand Philosophy */}
      <Section background="white">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-green-secondary mb-4">BRAND PHILOSOPHY</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            왜 자연스러움을 고집하나요
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary leading-loose text-center mb-12">
            자연스럽다는 말은 모호하지만,
            <br />
            과하지 않다는 기준은 분명합니다.
            <br /><br />
            권승주는 트렌드보다 얼굴의 구조를 먼저 보고,
            <br />
            유행보다 시간이 지나도 남는 인상을 선택합니다.
            <br /><br />
            눈썹과 수지는
            <br />
            &apos;티가 나면 실패&apos;인 영역이기 때문에
            <br />
            더욱 판단이 중요합니다.
          </p>

          <blockquote className="border-l-4 border-pink-primary pl-6 py-4 bg-pink-light/30">
            <p className="text-lg text-text-primary italic">
              "예뻐 보이는 건 순간이지만,
              <br />
              어색하지 않은 건 오래갑니다."
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Face Impression Design */}
      <section
        className="w-full border-t border-neutral-200 bg-white"
        aria-label="입술·눈썹·뷰러펌"
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
              FACE IMPRESSION DESIGN
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900"
            >
              여기서 받으면,<br />
              인상이 정리됩니다
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg text-neutral-600"
            >
              예뻐 보이는 걸 넘어서,<br />
              <strong className="text-neutral-900">
                &quot;사람 인상 자체가 좋아 보이게&quot;
              </strong>{' '}
              만드는 기준
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
                입술 · 눈썹 · 눈매를<br />한 번에 봅니다
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                하나만 잘한다고 인상이 바뀌지 않습니다.<br />
                권승주는 입술, 눈썹, 눈매를<br />
                <strong className="text-neutral-900">같은 얼굴 안에서 함께 판단</strong>합니다.
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
                유행보다<br />&apos;지금 얼굴&apos;
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                예쁜 디자인보다 중요한 건<br />
                지금 얼굴에 어울리는지 여부입니다.<br />
                그래서 과한 선택은 처음부터 배제합니다.
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
                시간이 지나도<br />어색하지 않게
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                처음보다 몇 달 뒤가 더 중요합니다.<br />
                오래 봐도 편안한 인상을 기준으로<br />
                결과를 남깁니다.
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
              WHY SEUNG JOO KWON
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-neutral-900">
              키아라 천안 승주원장에게 받아야하는 이유
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600">
              디자인을 &apos;잘하는 사람&apos;은 많습니다.<br />
              하지만 <strong className="text-neutral-900">인상을 판단할 수 있는 사람</strong>은 많지 않습니다.<br /><br />
              저는 기술보다 먼저 얼굴을 보고,<br />
              지금보다 더 좋아질 지점이 있는지부터 판단합니다.
            </p>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button href="/contact" size="lg">
              상담 문의하기
            </Button>
            <p className="mt-3 text-xs text-neutral-500">
              과장 없이, 기준으로 판단합니다
            </p>
          </div>
        </div>
      </section>

      {/* Artist Profile Preview */}
      <Section background="pink">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest text-green-secondary mb-4">ARTIST PROFILE</p>
            <h2 className="text-2xl md:text-4xl font-light text-text-primary mb-2">
              권승주 원장
              <br />
              <span className="text-green-primary">눈썹·수지 인상 설계</span>
            </h2>
            <p className="text-xs text-text-secondary/70 mb-8">키아라 천안</p>

            <p className="text-text-secondary leading-loose mb-8">
              오래 시술을 해오며 알게 된 건 하나였습니다.
              <br />
              사람들은 디자인을 기억하지 않고
              <br />
              느낌을 기억한다는 것.
              <br /><br />
              그래서 저는
              <br />
              손보다 눈이 먼저 가는 시술을 합니다.
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
          <p className="text-sm tracking-widest text-green-secondary mb-4">SERVICES</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            전문 시술
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Eyebrow */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-line p-8 md:p-12"
          >
            <h3 className="text-xl font-medium text-green-primary mb-4">EYEBROW</h3>
            <p className="text-2xl text-text-primary mb-6">
              눈썹은 얼굴의 지붕입니다
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              눈썹 하나로 사람이 달라 보이는 이유는
              그 위치와 방향이 얼굴 전체 인상을
              결정하기 때문입니다.
            </p>
            <ul className="text-sm text-text-secondary space-y-2 mb-8">
              <li>• 각도는 인상을 바꾸고</li>
              <li>• 두께는 신뢰를 만들며</li>
              <li>• 컬러는 나이를 결정합니다</li>
            </ul>
            <Button href="/eyebrow" variant="outline" size="sm">
              작품 감상하기
            </Button>
          </motion.div>

          {/* Lip Blush */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-line p-8 md:p-12"
          >
            <h3 className="text-xl font-medium text-pink-primary mb-4">LIP BLUSH</h3>
            <p className="text-2xl text-text-primary mb-6">
              입술은 더 조심해야 합니다
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              입술은 눈썹보다 더 미묘한 영역입니다.
              조금만 과해도 인상이 단번에 바뀝니다.
            </p>
            <ul className="text-sm text-text-secondary space-y-2 mb-8">
              <li>• 불필요한 색은 줄이고</li>
              <li>• 피부 톤에 맞춰 정돈하고</li>
              <li>• 시간이 지나도 부담 없는 상태로</li>
            </ul>
            <Button href="/lip-blush" variant="secondary" size="sm">
              작품 감상하기
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Customer Reviews */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-green-secondary mb-4">REVIEWS</p>
            <h2 className="text-2xl md:text-4xl font-light text-text-primary">
              고객 후기
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reviewImages.map((src, index) => (
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
                  alt={`고객 후기 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Recommended For */}
      <Section background="pink">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-green-secondary mb-4">RECOMMENDED FOR</p>
          <h2 className="text-2xl md:text-4xl font-light text-text-primary">
            이런 분께 추천합니다
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            '눈썹·수지가 늘 마음에 걸리는 분',
            '나이 들어 보인다는 말을 듣는 분',
            '사진 찍을 때 인상이 아쉬운 분',
            '유행보다 \'지금의 나\'에 맞는 선택을 하고 싶은 분',
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

      {/* Final CTA */}
      <Section background="green">
        <div className="text-center">
          <p className="text-white/70 text-sm tracking-widest mb-6">CONTACT</p>
          <h2 className="text-2xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            지금의 얼굴을
            <br />
            조금 더 정리하고 싶다면
            <br />
            권승주의 기준으로 판단해드립니다.
          </h2>
          <Button href="/contact" variant="secondary" size="lg">
            상담 문의
          </Button>
        </div>
      </Section>
    </>
  );
}
