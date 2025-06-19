'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Grid, IconCard, MotionDiv } from '@/components/ui';
import { BenefitsContent } from '@/types/lp';
import { staggerContainer } from '@/config/animations';

interface BenefitsProps {
  content: BenefitsContent;
}

export function Benefits({ content }: BenefitsProps) {
  return (
    <Section id="benefits" pattern>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Heading level={2} gradient>
              {content.title}
            </Heading>
            {content.subtitle && (
              <Text size="lg" muted>
                {content.subtitle}
              </Text>
            )}
          </div>

          {/* Benefits Grid */}
          <Grid cols={3} gap="lg">
            {content.items.map((item, index) => (
              <MotionDiv
                key={index}
                className="group"
                style={{
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{
                  rotateX: -5,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <IconCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className="h-full hover:shadow-2xl"
                />
              </MotionDiv>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
