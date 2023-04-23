import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? \n');
  console.log(`Hello ${username}!`);
};
export default welcome;
