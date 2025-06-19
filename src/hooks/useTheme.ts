import { useEffect } from 'react';
import { themes } from '@/config/theme';
import { LPMetadata } from '@/types/lp';

export function useTheme(metadata: LPMetadata) {
  useEffect(() => {
    const theme = themes[metadata.theme];
    if (!theme) return;

    // Aplicar cores do tema
    const root = document.documentElement;

    // Cores do tema selecionado
    Object.entries(theme.primary).forEach(([key, value]) => {
      root.style.setProperty(`--primary-${key}`, value);
    });

    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--foreground', theme.foreground);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--accent', theme.accent);

    // Aplicar cores customizadas se existirem
    if (metadata.customColors) {
      if (metadata.customColors.primary) {
        // Converter hex para RGB se necessário
        const rgb = hexToRgb(metadata.customColors.primary);
        if (rgb) {
          root.style.setProperty('--primary-500', `${rgb.r} ${rgb.g} ${rgb.b}`);
        }
      }
      if (metadata.customColors.accent) {
        const rgb = hexToRgb(metadata.customColors.accent);
        if (rgb) {
          root.style.setProperty('--accent', `${rgb.r} ${rgb.g} ${rgb.b}`);
        }
      }
    }
  }, [metadata]);
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
