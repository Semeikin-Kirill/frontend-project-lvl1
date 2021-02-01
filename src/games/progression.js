import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const phrase = 'What number is missing in the progression?';

const createProgression = () => {
  const run = getRandomNumber(5, 10);
  let firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(0, 20);
  const result = [];
  for (let i = 0; run >= i; i += 1) {
    result.push(firstNumber);
    firstNumber += secondNumber;
  }
  return result;
};

const isProgression = () => {
  const numbers = createProgression();
  const index = getRandomNumber(0, numbers.length - 1);
  const answer = `${numbers.splice(index, 1, '..')}`;
  const question = numbers.join(' ');
  return { question, answer };
};

export default () => createGame(isProgression, phrase);
