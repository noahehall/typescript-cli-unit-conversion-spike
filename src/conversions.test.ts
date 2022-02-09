// @ts-nocheck

import { BASE_PATH } from './constants';

const getFile = async (file = 'conversions') => import(`${BASE_PATH}${file}`);

test('roundToTenths', async () => {
  const { roundToTenths } = await getFile();

  expect(roundToTenths(1)).toEqual(1);
  expect(roundToTenths(1.03)).toEqual(1);

  expect(roundToTenths(1.05)).toEqual(1.1);
  expect(roundToTenths(1.07)).toEqual(1.1);
});

describe('unitIsValid', () => {
  let fixtures = {};
  beforeEach(async () => {
    const { unitIsValid } = await getFile();
    const { conversionTable } = await getFile('conversionTable');

    fixtures.unitIsValid = unitIsValid;
    fixtures.conversionTable = conversionTable;
  });

  afterEach(() => {
    fixtures = {};
  });

  test(`returns truthy for all valid units`, async () => {
    const { unitIsValid, conversionTable } = fixtures;
    Object.keys(conversionTable).forEach(unit => {
      expect(unitIsValid(unit)).toBe(true);
    });
  });

  test(`returns falsy for all invalid units`, async () => {
    const { unitIsValid } = fixtures;
    const invalidUnits = ['', ' ', '\t', '\n', '\r', 'flexion', 'coding', 'challenge'];

    invalidUnits.forEach(unit => {
      expect(unitIsValid(unit)).toBe(false);
    });
  });
});
