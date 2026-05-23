# CT Legado Jiu-Jitsu

Landing page da academia **CT Legado Jiu-Jitsu**, focada em conversão de novos alunos. Desenvolvida com Next.js e Tailwind CSS.

## Funcionalidades

- **Header** com logótipo e nome da academia
- **Hero** com texto impactante sobre Jiu-Jitsu e filosofia da academia
- **Carrossel de imagens** com fotos do espaço e treinos
- **Localização** com endereço e mapa do Google Maps
- **Botão WhatsApp** flutuante "Tirar Dúvidas" com mensagem predefinida
- Design **responsivo** para mobile e desktop

## Tecnologias

- [Next.js](https://nextjs.org/) — framework React com SEO e otimização de imagens
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária
- [TypeScript](https://www.typescriptlang.org/)

## Personalização

Edite o arquivo `lib/academy.ts` para configurar:

- Nome e textos da academia
- Endereço completo
- Número do WhatsApp e mensagem padrão
- URLs do Google Maps (embed e rota)
- Imagens do carrossel

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
# Build de produção
npm run build
npm start
```
