import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { conversionTable } from './conversionTable';
import { displayResults } from './output';
import { logIt } from './logIt';
import { QuestionResponse, type ProblemInputType } from './QuestionResponse';
import { UNITS } from './constants';
import { valueIsValid } from './conversions';

const rl = readline.createInterface({ input, output });

rl.on('close', () => {
  logIt('\n\n see ya later alligator!\n\n');
});

const inputVars = ['from', 'to', 'value', 'response'];

interface inputHelpers {
  [x: string]: (x: string, y: string) => string | boolean;
}
const inputOptions: inputHelpers = {
  from: () => JSON.stringify(Object.values(UNITS)),
  to: (from: string): string => JSON.stringify(Object.keys(conversionTable[from] || {})),
};

const inputValidators: inputHelpers = {
  from: (from: string): boolean => from in conversionTable,
  to: (to: string, from: string): boolean => from in conversionTable && to in conversionTable[from],
};

async function* getUserResponse() {
  let i = 0;
  let prevResponse;
  let thisResponse;

  askQuestion: while (i < inputVars.length) {
    const thisQuestion = i;
    const thisQuestionHelper = inputOptions[inputVars[thisQuestion]];

    if (thisQuestionHelper) {
      const helpText = thisQuestionHelper(prevResponse, thisResponse);

      logIt(`helpText: ${helpText}`);
    }
    thisResponse = await rl.question(`\n\nEnter value for ${inputVars[i].toUpperCase()}: `);

    const thisQuestionValidator = inputValidators[inputVars[thisQuestion]] || valueIsValid;

    if (thisQuestionValidator) {
      if (!thisQuestionValidator(thisResponse, prevResponse)) {
        logIt(
          `\n\ninvalid input for ${inputVars[thisQuestion].toUpperCase()}, please try again\n\n`
        );

        continue askQuestion;
      }
    }
    yield thisResponse;

    prevResponse = thisResponse;
    i++;
  }
}

export const runApp = async (
  prevResponse?: string[],
  allResponses: QuestionResponse[] = []
): Promise<void> => {
  if (!prevResponse) {
    logIt('\n\n New Q&A: here is the format: ');

    displayResults();

    return runApp([]);
  }
  if (!prevResponse.length) {
    if (allResponses?.length) {
      displayResults(allResponses);
    }
    for await (const userResponse of getUserResponse()) {
      prevResponse.push(userResponse);
    }
    return runApp(prevResponse, allResponses);
  }

  const inputMap = prevResponse.reduce(
    (acc, curr, i) => ({ ...acc, [inputVars[i]]: curr }),
    {}
  ) as ProblemInputType;
  const result = new QuestionResponse(inputMap);

  return runApp([], allResponses.concat(result));
};
