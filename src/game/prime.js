import { getRandomArbitrary } from '../index.js';

export const taskToPrime = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const questionPrime = () => getRandomArbitrary(1, 500);

export const yesOrNo = (str) => {
  const number = Number(str);
  for (let i = 2; number / 2 > i; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
