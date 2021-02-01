import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const phrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const reply = (number) => {
  for (let i = 2; number / 2 > i; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const isPrime = () => {
  const question = getRandomNumber(1, 500);
  const answer = `${reply(question)}`;
  return { question, answer };
};

export default () => createGame(isPrime, phrase);
