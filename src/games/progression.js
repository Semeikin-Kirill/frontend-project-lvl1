import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (long, number, difference) => {
  let num = number;
  const result = [];
  for (let i = 0; long > i; i += 1) {
    result.push(num);
    num += difference;
  }
  return result;
};

const gameProgression = () => {
  const long = getRandomNumber(5, 10);
  const number = getRandomNumber(1, 100);
  const defference = getRandomNumber(1, 20);
  const numbers = createProgression(long, number, defference);
  const index = getRandomNumber(0, numbers.length - 1);
  const answer = String(numbers[index]);
  numbers[index] = '..';
  const question = numbers.join(' ');
  return { question, answer };
};

export default () => createGame(gameProgression, description);
