'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Section, Container, Heading, Text, Avatar, GlassCard } from '@/components/ui';
import { TestimonialsContent } from '@/types/lp';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  content: TestimonialsContent;
}

export function Testimonials({ content }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % content.items.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + content.items.length) % content.items.length);
  };

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-primary-50/30 to-background">
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

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8 lg:p-12">
                  {/* Quote Icon */}
                  <Quote size={48} className="text-primary-200 mb-6" />
                  
                  {/* Content */}
                  <blockquote className="text-lg lg:text-xl mb-6">
                    {content.items[currentIndex].content}
                  </blockquote>

                  {/* Rating */}
                  {content.items[currentIndex].rating && (
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={cn(
                            i < content.items[currentIndex].rating!
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          )}
                        />
                      ))}
                    </div>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={content.items[currentIndex].avatar}
                      alt={content.items[currentIndex].name}
                      size="lg"
                    />
                    <div>
                      <div className="font-semibold">
                        {content.items[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted">
                        {content.items[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={previousTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {content.items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      index === currentIndex
                        ? 'w-8 bg-primary-500'
                        : 'bg-gray-300'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
