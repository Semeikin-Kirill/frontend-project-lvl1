import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const reply = (number) => {
  for (let i = 2; number / 2 > i; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const gamePrime = () => {
  const question = getRandomNumber(1, 500);
  const answer = String(reply(question));
  return { question, answer };
};

export default () => createGame(gamePrime, description);
