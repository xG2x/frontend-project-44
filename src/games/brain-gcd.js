import readlineSync from 'readline-sync';
import gameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomExpression = () => {
  const number1 = Math.round(Math.random() * 50); // random number in the range from 0 to 50;
  const number2 = Math.round(Math.random() * 50); // random number in the range from 0 to 50;
  return `${number1} ${number2}`;
};

const getCorrectAnswer = (expression) => {
  const [num1, num2] = expression.split(' ');
  let gcd = 1;
  for (let divisor = 2; divisor <= Math.max(num1, num2); divisor += 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      gcd = divisor;
    }
  }

  return String(gcd);
};

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainGCD = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = askQuestion(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameLogic(brainGCD, description);
