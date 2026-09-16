// app/fonts.ts
import { Cairo } from 'next/font/google';

export const appFont = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-app',
  display: 'swap',
});