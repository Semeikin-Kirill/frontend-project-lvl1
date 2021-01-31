import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const taskToGcd = () => 'Find the greatest common divisor of given numbers.';

const gcdQuestion = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  return `${number1} ${number2}`;
};

const gcdAnswer = (str) => {
  const numbers = str.split(' ');
  const a = Number(numbers[0]);
  const b = Number(numbers[1]);
  const gcd = (n1, n2) => {
    let num1 = n1;
    let num2 = n2;
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }
    return num1 + num2;
  };
  return String(gcd(a, b));
};

export default () => createGame(gcdQuestion, gcdAnswer, taskToGcd);
