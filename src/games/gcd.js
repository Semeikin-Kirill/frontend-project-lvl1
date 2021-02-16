import getRandomNumber from '../util.js';
import createGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);

const generateRound = () => {
  const number1 = getRandomNumber(1, 1000);
  const number2 = getRandomNumber(1, 1000);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return { question, answer };
};

export default () => createGame(generateRound, description);
