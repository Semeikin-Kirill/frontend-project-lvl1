import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const operators = ['+', '-', '*'];

const taskToCalc = () => 'What is the result of the expression?';

const calcQuestion = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  const operator = operators[getRandomNumber(0, operators.length)];
  return `${number1} ${operator} ${number2}`;
};
const calcAnswer = (str) => {
  let result;
  const masif = str.split(' ');
  const a = Number(masif[0]);
  const b = Number(masif[2]);
  const operator = masif[1];
  if (operator === '-') {
    result = a - b;
  } else if (operator === '*') {
    result = a * b;
  } else {
    result = a + b;
  }
  return String(result);
};

export default () => createGame(calcQuestion, calcAnswer, taskToCalc);
