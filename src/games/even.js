import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const phrase = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const question = getRandomNumber(0, 1000);
  const check = (number) => number % 2 === 0;
  const answer = check(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => createGame(isEven, phrase);
