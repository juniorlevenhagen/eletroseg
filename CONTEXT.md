# Diretrizes do Projeto - Frontend

## 🎨 Tech Stack & Styling
- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (Abordagem Mobile-First)

## 📱 Regras Estritas de UI & Responsividade
1. **Mobile-First por Padrão:**
   - Todos os componentes de layout DEVEM ser totalmente responsivos.
   - Use os breakpoints do Tailwind (`md:`, `lg:`) para ajustar de telas pequenas para grandes.
2. **Menus e Navbars:**
   - Devem conter obrigatoriamente estado mobile (`isOpen`).
   - Usar ícone de menu hambúrguer visível apenas em telas menores que `md`.
   - Opcionalmente travar o scroll do body ou fechar a gaveta ao clicar em um link interno (`#anchor`).
   - Aplicar `z-index` adequado (`z-50`) para evitar que a navegação fique atrás do conteúdo.
3. **Qualidade de Código:**
   - Não deixar variáveis de estado declaradas sem uso.
   - Garantir acessibilidade básica (`aria-label`, `aria-expanded`).