import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const taskToPrime = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionPrime = () => getRandomNumber(1, 500);

const yesOrNo = (str) => {
  const number = Number(str);
  for (let i = 2; number / 2 > i; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => createGame(questionPrime, yesOrNo, taskToPrime);
