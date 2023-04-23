import readlineSync from 'readline-sync';
import gameLogic from '../index.js';

const description = 'What is the result of the expression?';
const availableOperations = ['+', '-', '*'];

const getRandomExpression = () => {
  const number1 = Math.round(Math.random() * 20); // random number in the range from 0 to 20;
  const number2 = Math.round(Math.random() * 20); // random number in the range from 0 to 20;
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

const brainCalc = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = askQuestion(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameLogic(brainCalc, description);
