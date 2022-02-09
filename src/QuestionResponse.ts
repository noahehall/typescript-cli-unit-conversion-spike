import { compare } from './conversions';

export type ProblemInputType = {
  from: string;
  to: string;
  value: number | string;
  response: number | string;
};

interface ResponseInterface extends ProblemInputType {
  result?: string;
}

export class QuestionResponse implements ResponseInterface {
  from;
  response;
  result;
  to;
  value;

  constructor({ from, response, to, value, result }: ProblemInputType & ResponseInterface) {
    this.from = from;
    this.response = response;
    this.to = to;
    this.value = value;

    this.result = result || compare({ from, to, value: Number(value), response: Number(response) });
  }
}
