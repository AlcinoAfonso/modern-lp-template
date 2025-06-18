# Modern LP Template 2025

Template de Landing Page ultra moderno com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## 📋 Estrutura

```
src/
├── app/          # App Router do Next.js
├── components/   # Componentes React
├── config/       # Configurações (tema, animações)
├── lib/          # Utilitários
└── types/        # TypeScript types
```

## 🎨 Sistema de Temas

O template suporta 4 temas pré-definidos:
- `health` - Saúde e bem-estar
- `business` - Negócios
- `tech` - Tecnologia
- `nature` - Sustentabilidade

Configure no `lp.json`:
```json
{
  "metadata": {
    "theme": "health"
  }
}
```

## 📄 lp.json

{
  "metadata": {
    "title": "Título da Página",
    "description": "Descrição SEO",
    "theme": "health",
    "favicon": "/favicon.ico"
  },
  "content": {
    "header": {
      "logo": {
        "text": "Logo",
        "subtitle": "Subtítulo"
      },
      "cta": {
        "text": "Ação",
        "href": "#contact"
      }
    },
    "hero": {
      "headline": "Título Principal",
      "subheadline": "Subtítulo",
      "cta": {
        "primary": {
          "text": "CTA Principal",
          "href": "#"
        }
      }
    }
  }
}
