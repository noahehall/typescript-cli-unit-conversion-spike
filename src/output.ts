import { inspect } from 'util';

import { logIt } from './logIt';
import { QuestionResponse } from './QuestionResponse';

const DISPLAY_RESULTS_TEMPLATE = {
  from: 'the unit of measure you are converting from, e.g. Fahrenheit',
  response: 'the response given by the user, e.g. "100"',
  to: 'the unit of measure you are converting to, e.g. Celsius',
  value: 'the value you are converting, e.g. "100"',
  result: `
    the result of the conversion.
    comparing the response given by the user,
    with the value calculated internally.
    We use imperial units, and formulas taken from Googles onebox.
    `,
};

const appHelp = new QuestionResponse(DISPLAY_RESULTS_TEMPLATE);

export const displayResults = (results?: QuestionResponse | QuestionResponse[]) => {
  if (!results) logIt(inspect(appHelp, false, null, true));
  else console.table(Array.isArray(results) ? results : [results]);
};
