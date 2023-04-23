import readlineSync from 'readline-sync';
import gameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const maxLength = 10;
const minLength = 5;
const maxFirstNum = 50;
const maxStep = 5;
const minStep = 1;
const step = Math.round(minStep + Math.random() * (maxStep - minStep));

const getRandomExpression = () => {
  const firstNum = Math.round(Math.random() * maxFirstNum);
  const length = Math.round(minLength + Math.random() * (maxLength - minLength));

  const hiddenNumIndex = Math.round(Math.random() * (length - 1));
  const expression = [];
  for (let i = 0; i < length; i += 1) {
    if (i !== hiddenNumIndex) {
      expression.push(firstNum + step * i);
    } else expression.push('..');
  }
  return expression.join(' ');
};

const getCorrectAnswer = (expression) => {
  const progression = expression.split(' ');
  const hiddenNumIndex = progression.indexOf('..');
  let hiddenNum = 0;
  if (hiddenNumIndex === 0) {
    hiddenNum = +progression[1] - step;
  } else hiddenNum = +progression[0] + (step * hiddenNumIndex);

  return String(hiddenNum);
};

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainProgression = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = askQuestion(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameLogic(brainProgression, description);
