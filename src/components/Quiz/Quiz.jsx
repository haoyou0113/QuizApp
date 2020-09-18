import React, { useState, useEffect, Fragment } from 'react';
import LoadingSpin from '../Basic/Loading';
import QuizToggle from './components/QuizToggle';
import Questions from './components/Questions';
import Options from './components/Options';
import Score from './components/Score';
import '../../style/Quiz.css';

const Quiz = () => {
  const [questionData, setQuestionData] = useState([]);
  const [Viewed, setViewed] = useState(true); //  started answer questions
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // final result
  const [index, setIndex] = useState(0);
  const [hintNum, setHintNum] = useState(2);
  const [rightAnswer, setRightAnswer] = useState(0); // counting the correct answer
  const [gameOver, setGameOver] = useState(false);
  const questions = questionData.map(({ question }) => [question]); // loading questions and options

  const answers = questionData.map((item) => ({
    correct_answer: item.correct_answer,
    incorrect_answers: item.incorrect_answers,
  }));

  useEffect(() => {
    if (result === true) {
      setRightAnswer(rightAnswer + 1);
    }

    if (index !== 0 && index === questions.length && index) {
      setGameOver(true);
    }
  }, [index]);
  return (
    <Fragment>
      {Viewed && (
        <QuizToggle
          loading={loading}
          setIndex={setIndex}
          setQuestionData={setQuestionData}
          setViewed={setViewed}
          setLoading={setLoading}
        />
      )}
      {/*   display questions  after user click start*/}
      {!Viewed &&
        !gameOver &&
        (loading ? (
          <LoadingSpin />
        ) : (
          <div className='quizContainer'>
            <Questions
              question={questions[index]}
              totalQuestions={questions.length}
              index={index}
              className='questions'
            />
            <Options
              hintNum={hintNum}
              setHintNum={setHintNum}
              answers={answers[index] || {}}
              index={index}
              setIndex={setIndex}
              setResult={setResult}
              className='options'
            />
          </div>
        ))}

      {gameOver && (
        <Score
          totalQuestions={questions.length}
          setRightAnswer={setRightAnswer}
          setViewed={setViewed}
          setHintNum={setHintNum}
          setGameOver={setGameOver}
          rightAnswer={rightAnswer}
          score={rightAnswer / index}
        />
      )}
    </Fragment>
  );
};

export default Quiz;
