import { Container, Link, DynamicIcon } from '@/components/ui';
import { FooterContent } from '@/types/lp';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  content: FooterContent;
}

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t">
      <Container>
        <div className="py-12 space-y-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            {content.logo && (
              <div>
                <div className="text-xl font-bold text-foreground">
                  {content.logo.text}
                </div>
                {content.logo.subtitle && (
                  <div className="text-sm text-muted mt-1">
                    {content.logo.subtitle}
                  </div>
                )}
              </div>
            )}

            {/* Sections */}
            {content.sections?.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted hover:text-foreground transition-colors no-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="border-gray-200" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted">
              {content.copyright}
            </div>

            {/* Social Links */}
            {content.social && (
              <div className="flex items-center gap-4">
                {content.social.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary-100 hover:text-primary-600 flex items-center justify-center transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            )}

            {/* Legal Links */}
            {content.legal && (
              <div className="flex items-center gap-4">
                {content.legal.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
