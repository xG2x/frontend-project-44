import readlineSync from 'readline-sync';
import gameLogic from '../index.js';
import playRound from '../play-round.js';
import getRandomNumb from '../random-generator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 100; //  upper limit of number
const minNum = 1; //  lower limit of number

// eslint-disable-next-line max-len
const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271];

const getRandomExpression = () => getRandomNumb(minNum, maxNum);

const getCorrectAnswer = (expression) => (primeNums.includes(expression) ? 'yes' : 'no');

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainPrime = () => playRound(getRandomExpression, getCorrectAnswer, askQuestion);

export default () => gameLogic(brainPrime, description);
