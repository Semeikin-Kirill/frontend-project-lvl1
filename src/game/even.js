import { getRandomArbitrary } from '../index.js';

export const yesOrNo = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const taskToEven = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenQuestion = () => getRandomArbitrary(0, 1000);
