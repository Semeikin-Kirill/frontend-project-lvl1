import { getRandomArbitrary } from '../index.js';

const operators = ['+', '-', '*'];

export const taskToCalc = () => 'What is the result of the expression?';

export const calcQuestion = () => {
  const number1 = getRandomArbitrary(1, 1000);
  const number2 = getRandomArbitrary(1, 1000);
  const operator = operators[getRandomArbitrary(0, operators.length)];
  return `${number1} ${operator} ${number2}`;
};
export const calcAnswer = (question) => String(eval(question));
