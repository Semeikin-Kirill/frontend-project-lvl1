import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return findGcd(b, c);
  }
  return a;
};

const gameGcd = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return { question, answer };
};

export default () => createGame(gameGcd, description);
