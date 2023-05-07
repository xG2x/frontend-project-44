import readlineSync from 'readline-sync';
import gameLogic from '../index.js';
import playRound from '../play-round.js';
import getRandomNumb from '../random-generator.js';

const description = 'What is the result of the expression?';
const availableOperations = ['+', '-', '*'];
const maxNum = 100; //  upper limit of number
const minNum = 1; //  lower limit of number

const getRandomExpression = () => {
  const number1 = getRandomNumb(minNum, maxNum);
  const number2 = getRandomNumb(minNum, maxNum);
  const operation = availableOperations[Math.floor(Math.random() * availableOperations.length)];
  return `${number1} ${operation} ${number2}`;
};

const getCorrectAnswer = (expression) => {
  const [num1, operation, num2] = expression.split(' ');
  let correctAnswer = 0;
  if (operation === '-') {
    correctAnswer = Number(num1) - Number(num2);
  } else if (operation === '+') {
    correctAnswer = Number(num1) + Number(num2);
  } else correctAnswer = Number(num1) * Number(num2);
  return String(correctAnswer);
};

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainCalc = () => playRound(getRandomExpression, getCorrectAnswer, askQuestion);

export default () => gameLogic(brainCalc, description);
