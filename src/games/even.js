import getRandomNumber from '../utility.js';
import createGame from '../index.js';

const yesOrNo = (num) => (num % 2 === 0 ? 'yes' : 'no');

const taskToEven = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const evenQuestion = () => getRandomNumber(0, 1000);

export default () => createGame(evenQuestion, yesOrNo, taskToEven);
