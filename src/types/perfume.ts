export type Perfume = {
  id: 'azure-noctis' | 'rouge-velours' | 'vert-eclipse';
  index: string;
  name: string;
  tagline: string;
  description: string;
  notes: readonly string[];
  imagePath: string;
  colors: {
    primary: string;
    glow: string;
    dark: string;
    light: string;
    haze: string;
  };
};
