import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrime = (num) => (isPrime(num) ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomNumber(1, 500);
  const answer = sayPrime(question);
  return { question, answer };
};

export default () => createGame(generateRound, description);
