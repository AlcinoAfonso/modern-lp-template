'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, Button, Badge, Heading, Text } from '@/components/ui';
import { HeroContent } from '@/types/lp';
import { staggerContainer } from '@/config/animations';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background com diagonal */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-background" />
        <svg
          className="absolute bottom-0 left-0 right-0"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgb(var(--background))"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            {/* Badges */}
            {content.badges && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2"
              >
                {content.badges.map((badge) => (
                  <Badge key={badge} variant="primary">
                    {badge}
                  </Badge>
                ))}
              </motion.div>
            )}

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Heading level={1} gradient animate={false}>
                {content.headline}
              </Heading>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Text size="xl" muted>
                {content.subheadline}
              </Text>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = content.cta.primary.href)}
              >
                {content.cta.primary.text}
              </Button>
              {content.cta.secondary && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = content.cta.secondary!.href)}
                >
                  {content.cta.secondary.text}
                </Button>
              )}
            </motion.div>
          </div>

          {/* Image */}
          {content.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-accent/20 rounded-3xl blur-3xl" />
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
