import * as icons from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

export interface DynamicIconProps extends LucideProps {
  name: keyof typeof icons;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = icons[name] as LucideIcon | undefined;

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
}
