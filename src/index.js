import readlineSync from 'readline-sync';

const roundsCount = 3;

const createGame = (game, condition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  for (let i = 0; i < roundsCount; i += 1) {
    const data = game();
    console.log(`Question: ${data.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === data.answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${data.answer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default createGame;
