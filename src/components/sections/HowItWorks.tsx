'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, DynamicIcon } from '@/components/ui';
import { HowItWorksContent } from '@/types/lp';
import { cn } from '@/lib/utils';

interface HowItWorksProps {
  content: HowItWorksContent;
}

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <Section id="how" className="bg-gradient-to-b from-background to-primary-50/30">
      <Container>
        <div className="space-y-12">
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

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-primary-400 hidden lg:block" />
            
            <div className="space-y-8 lg:space-y-16">
              {content.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    'flex items-center gap-8',
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  )}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-20 h-20 lg:w-24 lg:h-24"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-xl opacity-50" />
                      <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-2xl lg:text-3xl shadow-xl">
                        {step.number || index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={cn(
                    'flex-1 bg-white rounded-2xl p-6 lg:p-8 shadow-xl',
                    'hover:shadow-2xl transition-shadow duration-300'
                  )}>
                    <div className="flex items-start gap-4">
                      {step.icon && (
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <DynamicIcon name={step.icon} className="text-primary-600" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
