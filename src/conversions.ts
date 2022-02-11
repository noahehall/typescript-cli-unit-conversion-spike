import { conversionTable } from './conversionTable';
import { RESULT_TYPE } from './constants';

export const roundToTenths = (num: number) => Math.round(num * 10) / 10;

export const unitIsValid = (unit: string) => unit in conversionTable;

export const valueIsValid = (value: number) => !isNaN(value) && isFinite(value);

export const canConvert = (from: string, to: string) =>
  [from, to].every(unitIsValid) && typeof conversionTable[from][to] !== 'undefined';

export const convert = (from: string, to: string, value: number) =>
  canConvert(from, to) && valueIsValid(value)
    ? roundToTenths(conversionTable[from][to](value))
    : RESULT_TYPE.INV;

export const compare = ({
  from,
  response,
  to,
  value,
}: {
  from: string;
  response: number;
  to: string;
  value: number;
}) => {
  const expectedvalue = convert(from, to, value);
  if (expectedvalue === RESULT_TYPE.INV) return RESULT_TYPE.INV;

  return (
    (expectedvalue === roundToTenths(response) ? RESULT_TYPE.TRUE : RESULT_TYPE.FALSE) +
    `: ${expectedvalue}`
  );
};
