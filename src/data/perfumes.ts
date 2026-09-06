import type { Perfume } from '../types/perfume';

export const perfumes: readonly Perfume[] = [
  {
    id: 'azure-noctis',
    index: '01',
    name: 'Azure Noctis',
    tagline: 'O mistério do azul após a meia-noite.',
    description: 'Uma presença fria e luminosa, lapidada entre incenso, íris e madeiras profundas.',
    notes: ['Bergamota', 'Íris', 'Incenso', 'Âmbar-cinzento', 'Cedro'],
    imagePath: '/images/azure-noctis.png',
    colors: { primary: '#1648A8', glow: '#2867E8', dark: '#07152F', light: '#9BBEFF', haze: '#173D82' },
  },
  {
    id: 'rouge-velours',
    index: '02',
    name: 'Rouge Velours',
    tagline: 'Intensidade sedutora em cada acorde.',
    description: 'Rosa damascena e cereja escura envolvidas por açafrão, baunilha e um rastro de musk.',
    notes: ['Rosa damascena', 'Cereja escura', 'Açafrão', 'Baunilha', 'Musk'],
    imagePath: '/images/rouge-velours.png',
    colors: { primary: '#8C1429', glow: '#D52A49', dark: '#2E070E', light: '#F1909F', haze: '#76152A' },
  },
  {
    id: 'vert-eclipse',
    index: '03',
    name: 'Vert Éclipse',
    tagline: 'Frescura nobre com profundidade marcante.',
    description: 'Folha de figo e sálvia atravessam um coração de vetiver, musgo de carvalho e sândalo.',
    notes: ['Folha de figo', 'Vetiver', 'Sálvia', 'Musgo de carvalho', 'Sândalo'],
    imagePath: '/images/vert-eclipse.png',
    colors: { primary: '#0F6A4E', glow: '#19A36E', dark: '#05271D', light: '#85D7B5', haze: '#0E573F' },
  },
] as const;
