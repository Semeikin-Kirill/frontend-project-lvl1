import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const operations = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = `${num1 + num2}`;
      break;
    case '-':
      result = `${num1 - num2}`;
      break;
    case '*':
      result = `${num1 * num2}`;
      break;
    // no default
  }
  return result;
};

const gameCalc = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  const operator = operators[getRandomNumber(0, operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(operations(number1, number2, operator));
  return { question, answer };
};

export default () => createGame(gameCalc, description);
