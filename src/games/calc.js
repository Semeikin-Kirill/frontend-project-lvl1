import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const operators = ['+', '-', '*'];

const phrase = 'What is the result of the expression?';

const isCalc = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  const operator = operators[getRandomNumber(0, operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  let answer;
  switch (operator) {
    case '+':
      answer = `${number1 + number2}`;
      break;
    case '-':
      answer = `${number1 - number2}`;
      break;
    default:
      answer = `${number1 * number2}`;
      break;
  }
  return { question, answer };
};

export default () => createGame(isCalc, phrase);
