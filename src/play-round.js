const playRound = (getRandomExpression, getCorrectAnswer, askQuestion) => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = askQuestion(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default playRound;
