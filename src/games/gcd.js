import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const phrase = 'Find the greatest common divisor of given numbers.';

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

const isGcd = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  const question = `${number1} ${number2}`;
  const answer = `${gcd(number1, number2)}`;
  return { question, answer };
};

export default () => createGame(isGcd, phrase);
