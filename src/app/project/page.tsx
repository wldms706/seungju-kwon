'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function ProjectPage() {
  const projects = [
    {
      title: '2026 인상 리셋',
      description: '새해, 새로운 인상으로 시작하세요. 자연스럽게 정리된 눈썹과 수지로 첫인상을 리셋합니다.',
      tag: '시즌 캠페인',
    },
    {
      title: '결혼 전 인상 정리',
      description: '인생에서 가장 많은 사진을 찍는 날, 어색하지 않은 자연스러운 인상으로 준비하세요.',
      tag: '웨딩 특별',
    },
  ];

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
            PROJECT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-light text-text-primary leading-tight"
          >
            캠페인 & 콘텐츠
          </motion.h1>
        </div>
      </section>

      {/* Projects */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-pink-light/30 p-8 md:p-12"
              >
                <span className="inline-block text-xs tracking-wider text-pink-primary bg-pink-primary/10 px-3 py-1 mb-4">
                  {project.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-text-primary mb-4">
                  {project.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                <Button href="/contact" variant="outline" size="sm">
                  자세히 보기
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* Coming Soon */}
      <Section background="pink">
        <div className="text-center">
          <p className="text-sm tracking-widest text-green-secondary mb-4">COMING SOON</p>
          <h2 className="text-2xl md:text-3xl font-light text-text-primary mb-8">
            더 많은 콘텐츠가 준비 중입니다
          </h2>
          <p className="text-text-secondary">
            인스타그램에서 최신 소식을 확인하세요.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            캠페인 참여를
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
