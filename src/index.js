import readlineSync from 'readline-sync';

const COUNT = 3;

const gameLogic = (game, description) => {
  let count = 1;
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  while (count <= COUNT) {
    const { correctAnswer, answer } = game();
    if (answer === correctAnswer) {
      console.log('Correct');
      if (count === COUNT) {
        console.log(`Congratulations, ${name}!`);
      }
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default gameLogic;
