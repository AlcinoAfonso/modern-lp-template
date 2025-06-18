export const theme = {
  colors: {
    // Sistema de cores com variáveis CSS para fácil customização
    primary: {
      50: 'rgb(var(--primary-50) / <alpha-value>)',
      100: 'rgb(var(--primary-100) / <alpha-value>)',
      200: 'rgb(var(--primary-200) / <alpha-value>)',
      300: 'rgb(var(--primary-300) / <alpha-value>)',
      400: 'rgb(var(--primary-400) / <alpha-value>)',
      500: 'rgb(var(--primary-500) / <alpha-value>)',
      600: 'rgb(var(--primary-600) / <alpha-value>)',
      700: 'rgb(var(--primary-700) / <alpha-value>)',
      800: 'rgb(var(--primary-800) / <alpha-value>)',
      900: 'rgb(var(--primary-900) / <alpha-value>)',
    },
    background: 'rgb(var(--background) / <alpha-value>)',
    foreground: 'rgb(var(--foreground) / <alpha-value>)',
    muted: 'rgb(var(--muted) / <alpha-value>)',
    accent: 'rgb(var(--accent) / <alpha-value>)',
  },
  effects: {
    glass: 'backdrop-blur-xl bg-white/10 border border-white/20',
    glow: 'shadow-2xl shadow-primary-500/25',
    gradient: 'bg-gradient-to-br from-primary-500 to-primary-700',
  }
};

// Temas pré-definidos
export const themes = {
  health: {
    name: 'Saúde & Bem-estar',
    primary: {
      50: '239 246 255',
      100: '219 234 254',
      200: '191 219 254',
      300: '147 197 253',
      400: '96 165 250',
      500: '59 130 246', // Principal
      600: '37 99 235',
      700: '29 78 216',
      800: '30 64 175',
      900: '30 58 138',
    },
    background: '248 250 252',
    foreground: '15 23 42',
    muted: '100 116 139',
    accent: '251 146 60',
  },
  business: {
    name: 'Negócios',
    primary: {
      50: '254 242 242',
      100: '254 226 226',
      200: '254 202 202',
      300: '252 165 165',
      400: '248 113 113',
      500: '239 68 68', // Principal
      600: '220 38 38',
      700: '185 28 28',
      800: '153 27 27',
      900: '127 29 29',
    },
    background: '255 255 255',
    foreground: '17 24 39',
    muted: '107 114 128',
    accent: '34 197 94',
  }
};
