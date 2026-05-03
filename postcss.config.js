import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [
    tailwindcss({
      base: __dirname,
    }),
    
    autoprefixer(),
  ],
};
