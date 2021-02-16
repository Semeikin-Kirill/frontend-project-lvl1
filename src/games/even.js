import getRandomNumber from '../util.js';
import createGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(0, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => createGame(generateRound, description);
