# Maison Veyra

Experiência digital conceitual para uma coleção de perfumaria, desenvolvida com foco em direção visual, transições de produto e animação de interface.

[Ver projeto em produção](https://maisonveyra-neon.vercel.app)

## Objetivo

Apresentar três fragrâncias com identidades próprias sem trocar de página. Ao navegar pela coleção, produto, conteúdo, iluminação e paleta mudam como uma única cena.

## Funcionalidades

- Navegação entre três fragrâncias
- Cenário e paleta controlados pelos dados do produto
- Transições coordenadas com timeline
- Bloqueio de interação durante a animação
- Informações e notas olfativas acessíveis
- Layout responsivo
- Preloader e palco visual para o frasco

## Tecnologias

- React
- TypeScript
- Vite
- GSAP
- CSS
- Vercel

## Arquitetura

As informações das fragrâncias ficam em `src/data/perfumes.ts`. O componente `PerfumeHero` usa essa fonte única para renderizar conteúdo, cores e imagens, além de coordenar as transições com GSAP.

Os tipos do domínio ficam separados em `src/types`, evitando que a estrutura de um perfume seja definida diretamente na interface.

## Decisões técnicas

- Conteúdo orientado por dados para evitar três interfaces duplicadas
- Cores expostas como propriedades CSS para animar a cena completa
- Timeline única para sincronizar saída, mudança de estado e entrada
- Controles desabilitados temporariamente para impedir transições concorrentes
- Textos alternativos e rótulos nos controles de navegação

## Limites do projeto

O projeto demonstra uma experiência de produto no frontend. Não possui catálogo conectado a banco de dados, checkout ou processamento de pagamentos.

## Executar localmente

```bash
git clone https://github.com/mateusdomingues/perfume.git
cd perfume
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```
