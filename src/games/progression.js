import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (length, first, step) => {
  const result = [];
  for (let i = 0; length > i; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const first = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const progression = createProgression(length, first, step);
  const index = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default () => createGame(generateRound, description);
