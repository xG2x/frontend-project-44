import readlineSync from 'readline-sync';

const COUNT = 3; // number of repeating questions;

const getCorrectAnswer = (number) => {
  const isEven = number % 2 === 0;
  return isEven ? 'yes' : 'no';
};

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
};

const brainEven = () => {
  let count = 1;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (count <= COUNT) {
    const number = Math.round(Math.random() * 100); // random number in the range from 0 to 100;;
    const correctAnswer = getCorrectAnswer(number);
    const answer = askQuestion(number);
    if (answer === correctAnswer) {
      console.log('Correct');
      if (count === COUNT) {
        console.log(`Congratulations, ${username}!`);
      }
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${username}!`);
      break;
    }
  }
};

export default brainEven;
