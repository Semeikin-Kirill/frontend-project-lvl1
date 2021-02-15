import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => createGame(generateRound, description);
