'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Container, Heading, Text, MotionDiv } from '@/components/ui';
import { AboutContent } from '@/types/lp';
import { staggerContainer } from '@/config/animations';
import { cn } from '@/lib/utils';

interface AboutProps {
  content: AboutContent;
}

export function About({ content }: AboutProps) {
  const paragraphs = typeof content.content === 'string'
    ? [{ paragraph: content.content }]
    : content.content;

  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Heading level={2} gradient>
                {content.title}
              </Heading>
              {content.subtitle && (
                <Text size="lg" muted className="mt-4">
                  {content.subtitle}
                </Text>
              )}
            </div>

            <div className="space-y-4">
              {paragraphs.map((p, index) => (
                <MotionDiv key={index}>
                  <Text>{p.paragraph}</Text>
                </MotionDiv>
              ))}
            </div>

            {/* Stats */}
            {content.stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
              >
                {content.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      className="text-3xl lg:text-4xl font-bold text-gradient"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Image */}
          {content.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
