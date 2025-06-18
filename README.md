# 🚀 Modern LP Template 2025

Template ultra-moderno de Landing Page com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Sistema de Temas Inteligente** - 4 temas pré-definidos + cores customizáveis
- 📱 **100% Responsivo** - Mobile-first design
- ⚡ **Performance Otimizada** - 90+ no Lighthouse
- 🎭 **Animações Modernas** - Framer Motion + micro-interações
- 🔧 **Altamente Customizável** - Edite apenas o lp.json
- 🎯 **Focado em Conversão** - CTAs estratégicos e design persuasivo
- ♿ **Acessível** - WCAG 2.1 compatível
- 🔍 **SEO Ready** - Metadados completos

## 🏗️ Estrutura

```
modern-lp-template/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       
│   │   ├── sections/     # 8 seções da LP
│   │   └── ui/          # Componentes reutilizáveis
│   ├── config/          # Tema e animações
│   ├── contexts/        # Context API
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   └── types/           # TypeScript types
├── public/              # Assets estáticos
├── lp.json             # ⭐ Conteúdo da LP
└── package.json
```

## 🚀 Quick Start

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/modern-lp-template.git

# Entre na pasta
cd modern-lp-template

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev
```

Acesse http://localhost:3000

## 🎨 Personalização

### 1. Edite o Conteúdo

Toda a personalização é feita no arquivo `lp.json`:

```json
{
  "metadata": {
    "title": "Sua Landing Page",
    "theme": "health"  // health, business, tech, nature
  },
  "content": {
    // Conteúdo das 8 seções
  }
}
```

### 2. Temas Disponíveis

- **health** - Azul calmo para saúde/bem-estar
- **business** - Vermelho energético para negócios  
- **tech** - Roxo moderno para tecnologia
- **nature** - Verde orgânico para sustentabilidade

### 3. Cores Customizadas

```json
"customColors": {
  "primary": "#2563EB",
  "accent": "#F59E0B"
}
```

## 📋 Seções Disponíveis

1. **Header** - Navegação minimalista com CTA
2. **Hero** - Impacto visual com diagonal
3. **Benefits** - Cards 3D com ícones
4. **How It Works** - Timeline animado
5. **About** - Storytelling com stats
6. **Testimonials** - Carrossel moderno
7. **CTA Final** - Conversão impactante
8. **Footer** - Links e informações

## 🛠️ Comandos

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Rodar build
npm run check    # Verificar setup
npm run format   # Formatar código
npm run lint     # Verificar erros
```

## 🚢 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/modern-lp-template)

### Outras Plataformas

```bash
npm run build
# Upload da pasta .next
```

## 📚 Documentação

- [Guia de Personalização](./INSTRUCTIONS.md)
- [Componentes UI](./src/components/ui/README.md)
- [Criar Novas Seções](./src/components/sections/CustomExample.tsx)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Créditos

Criado com ❤️ por [Seu Nome](https://github.com/seu-usuario)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

