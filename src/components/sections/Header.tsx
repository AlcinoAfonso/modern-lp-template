'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container, Button, Link } from '@/components/ui';
import { HeaderContent } from '@/types/lp';
import { cn } from '@/lib/utils';

interface HeaderProps {
  content: HeaderContent;
}

export function Header({ content }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start no-underline">
            <span className="text-xl font-bold text-foreground">
              {content.logo.text}
            </span>
            {content.logo.subtitle && (
              <span className="text-sm text-muted">{content.logo.subtitle}</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {content.navigation?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary-600 transition-colors no-underline font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            {content.cta && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => (window.location.href = content.cta!.href)}
              >
                {content.cta.text}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg"
      >
        <Container>
          <div className="py-4 space-y-4">
            {content.navigation?.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {content.cta && (
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.location.href = content.cta!.href;
                  setIsMobileMenuOpen(false);
                }}
              >
                {content.cta.text}
              </Button>
            )}
          </div>
        </Container>
      </motion.div>
    </header>
  );
}
