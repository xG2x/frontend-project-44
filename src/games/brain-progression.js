import readlineSync from 'readline-sync';
import gameLogic from '../index.js';
import playRound from '../play-round.js';
import getRandomNumb from '../random-generator.js';

const description = 'What number is missing in the progression?';

const maxLength = 10; //  max progression's length
const minLength = 5; //  min progression's length
const maxFirstNum = 50; //  max progression's start number
const minFirstNum = 1; // min progression's start number
const maxStep = 5; // max progression's step
const minStep = 1; // min progression's step
const step = getRandomNumb(minStep, maxStep);

const getRandomExpression = () => {
  const firstNum = getRandomNumb(minFirstNum, maxFirstNum);
  const length = getRandomNumb(minLength, maxLength);
  const hiddenNumIndex = getRandomNumb(0, length - 1);
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

const brainProgression = () => playRound(getRandomExpression, getCorrectAnswer, askQuestion);

export default () => gameLogic(brainProgression, description);
