import { UNITS as U } from './constants';

// formulas taken from google one box
// where ambiguity exists, imperial units are used

export const conversionTable: {
  [key: string]: { [key: string]: (input: number) => number };
} = {
  [U.KEL]: {
    [U.CEL]: (k: number) => k - 273.15,
    [U.FAH]: (k: number) => (k - 273.15) * (9 / 5) + 32,
    [U.RAN]: (k: number) => k * 1.8,
  },
  [U.CEL]: {
    [U.FAH]: (c: number) => c * (9 / 5) + 32,
    [U.KEL]: (c: number) => c + 273.15,
    [U.RAN]: (c: number) => c * (9 / 5) + 491.67,
  },
  [U.FAH]: {
    [U.CEL]: (f: number) => (f - 32) * (5 / 9),
    [U.KEL]: (f: number) => (f - 32) * (5 / 9) + 273.15,
    [U.RAN]: (f: number) => f + 459.67,
  },
  [U.RAN]: {
    [U.CEL]: (r: number) => (r - 491.67) * (5 / 9),
    [U.FAH]: (r: number) => r - 459.67,
    [U.KEL]: (r: number) => r * (5 / 9),
  },
  [U.LIT]: {
    [U.CUBFT]: (l: number) => l / 28.317,
    [U.CUBIN]: (l: number) => l * 61.024,
    [U.CUPS]: (l: number) => l * 3.52,
    [U.GAL]: (l: number) => l / 4.546,
    [U.TBSP]: (l: number) => l * 56.312,
  },
  [U.GAL]: {
    [U.CUBFT]: (g: number) => g / 6.229,
    [U.CUBIN]: (g: number) => g * 277,
    [U.CUPS]: (g: number) => g * 16,
    [U.LIT]: (g: number) => g * 4.546,
    [U.TBSP]: (g: number) => g * 256,
  },
  [U.TBSP]: {
    [U.CUBFT]: (t: number) => t / 1595,
    [U.CUBIN]: (t: number) => t * 1.084,
    [U.CUPS]: (t: number) => t / 16,
    [U.GAL]: (t: number) => t / 256,
    [U.LIT]: (t: number) => t / 56.312,
  },
  [U.CUBIN]: {
    [U.CUBFT]: (c: number) => c / 1728,
    [U.CUPS]: (c: number) => c / 17.339,
    [U.GAL]: (c: number) => c / 277,
    [U.LIT]: (c: number) => c / 61.024,
    [U.TBSP]: (c: number) => c / 1.084,
  },
  [U.CUPS]: {
    [U.CUBFT]: (c: number) => c / 99.661,
    [U.CUBIN]: (c: number) => c * 17.339,
    [U.GAL]: (c: number) => c / 16,
    [U.LIT]: (c: number) => c / 3.52,
    [U.TBSP]: (c: number) => c * 16,
  },
  [U.CUBFT]: {
    [U.CUBIN]: (c: number) => c * 1728,
    [U.CUPS]: (c: number) => c * 99.661,
    [U.GAL]: (c: number) => c * 6.229,
    [U.LIT]: (c: number) => c / 28.317,
    [U.TBSP]: (c: number) => c * 1595,
  },
};
