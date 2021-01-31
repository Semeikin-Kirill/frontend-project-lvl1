import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const createGame = (game, answer, condition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition());
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionForGame = game();
    const correctAnswer = answer(questionForGame);
    console.log(`Question: ${questionForGame}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
export default createGame;
