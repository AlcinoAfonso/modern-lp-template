import { useEffect } from 'react';
import type { LPMetadata } from '@/types/lp';
import { themes } from '@/config/theme';

export function useTheme(metadata: LPMetadata) {
  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[metadata.theme];

    if (theme) {
      Object.entries(theme.primary).forEach(([key, value]) => {
        root.style.setProperty(`--primary-${key}`, value as string);
      });
      root.style.setProperty('--background', theme.background);
      root.style.setProperty('--foreground', theme.foreground);
      root.style.setProperty('--muted', theme.muted);
      root.style.setProperty('--accent', theme.accent);
    }

    if (metadata.customColors) {
      const { primary, accent, background, foreground } = metadata.customColors;
      if (primary) root.style.setProperty('--primary-500', primary);
      if (accent) root.style.setProperty('--accent', accent);
      if (background) root.style.setProperty('--background', background);
      if (foreground) root.style.setProperty('--foreground', foreground);
    }
  }, [metadata]);
}
