import readlineSync from 'readline-sync';
import gameLogic from '../index.js';
import playRound from '../play-round.js';
import getRandomNumb from '../random-generator.js';

const description = 'Find the greatest common divisor of given numbers.';
const maxNum = 50; //  upper limit of number
const minNum = 1; //  lower limit of number

const getRandomExpression = () => {
  const number1 = getRandomNumb(minNum, maxNum);
  const number2 = getRandomNumb(minNum, maxNum);
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

const brainGCD = () => playRound(getRandomExpression, getCorrectAnswer, askQuestion);

export default () => gameLogic(brainGCD, description);
