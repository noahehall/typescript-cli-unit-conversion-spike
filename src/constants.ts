import process from 'node:process';

export const ISPROD = process.env.NODE_ENV === 'production';

export const BASE_PATH = ISPROD ? '../dist/' : './';

export const UNITS: { [x: string]: string } = {
  CEL: 'celsius',
  CUBFT: 'cubicFeet',
  CUBIN: 'cubicInches',
  CUPS: 'cups',
  FAH: 'fahrenheit',
  GAL: 'gallons',
  KEL: 'kelvin',
  LIT: 'liters',
  RAN: 'rankine',
  TBSP: 'tablespoons',
};

export const RESULT_TYPE = {
  FALSE: 'incorrect',
  INV: 'invalid',
  TRUE: 'correct',
};
