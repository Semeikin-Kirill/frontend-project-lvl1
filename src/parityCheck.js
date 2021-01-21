import readlineSync from 'readline-sync';

const getRandomArbitrary = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin) + numMin);
};

const yesOrNo = (num) => (num % 2 === 0 ? 'yes' : 'no');

const parityQuestions = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i < 4; i += 1) {
    const number = getRandomArbitrary(0, 1000);
    console.log(`Question: ${number}`);
    const correctAnswer = yesOrNo(number);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default parityQuestions;
