import { getRandomArbitrary } from '../index.js';

export const taskToProgression = () => 'What number is missing in the progression?';

export const progressionQuestion = () => {
  const run = getRandomArbitrary(5, 10);
  let firstNumber = getRandomArbitrary(1, 100);
  const secondNumber = getRandomArbitrary(0, 20);
  const result = [];
  for (let i = 0; run >= i; i += 1) {
    result.push(firstNumber);
    firstNumber += secondNumber;
  }
  result.splice(getRandomArbitrary(1, result.length - 1), 1, '..');
  return result.join(' ');
};

export const progressionAnswer = (str) => {
  let a;
  let b;
  const masif = str.split(' ');
  if (masif[0] !== '..' && masif[1] !== '..') {
    a = Number(masif[1]);
    b = Number(masif[0]);
  } else {
    const run = masif.length;
    a = Number(masif[run - 1]);
    b = Number(masif[run - 2]);
  }
  const num = a - b;
  let i = 0;
  while (masif[i] !== '..') {
    i += 1;
  }
  const result = Number(masif[i - 1]) + num;
  return String(result);
};
