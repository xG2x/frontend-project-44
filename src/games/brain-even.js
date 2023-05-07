import readlineSync from 'readline-sync';
import gameLogic from '../index.js';
import playRound from '../play-round.js';
import getRandomNumb from '../random-generator.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNum = 100; //  upper limit of number
const minNum = 1; //  lower limit of number

const getRandomExpression = () => getRandomNumb(minNum, maxNum);

const getCorrectAnswer = (num) => {
  const isEven = num % 2 === 0;
  return isEven ? 'yes' : 'no';
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  return readlineSync.question('Your answer: ');
};

const brainEven = () => playRound(getRandomExpression, getCorrectAnswer, askQuestion);

export default () => gameLogic(brainEven, description);
