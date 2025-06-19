'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Section, Container, Heading, Text, Button } from '@/components/ui';
import { CTAFinalContent } from '@/types/lp';

interface CTAFinalProps {
  content: CTAFinalContent;
}

export function CTAFinal({ content }: CTAFinalProps) {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white space-y-8"
        >
          {/* Urgency */}
          {content.urgency && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold">
                🔥 {content.urgency}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <Heading level={2} className="text-white">
            {content.title}
          </Heading>

          {/* Subtitle */}
          {content.subtitle && (
            <Text size="xl" className="text-white/90">
              {content.subtitle}
            </Text>
          )}

          {/* Benefits */}
          {content.benefits && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {content.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-400" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-2xl group"
              onClick={() => (window.location.href = content.cta.href)}
            >
              {content.cta.text}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
