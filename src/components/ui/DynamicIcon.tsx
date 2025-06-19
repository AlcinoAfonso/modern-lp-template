import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name?: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 24, className }: DynamicIconProps) {
  if (!name) return null;
  
  // Converte o nome do ícone para o formato correto
  // Ex: "heart" -> "Heart", "file-search" -> "FileSearch"
  const iconName = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const Icon = (Icons as any)[iconName] as LucideIcon;
  
  if (!Icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <Icon size={size} className={className} />;
}
