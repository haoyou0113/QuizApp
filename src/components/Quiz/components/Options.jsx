import React, { useState, useEffect, memo } from 'react';
import { Button, Alert } from 'antd';
import '../style/options.css';
export default function Options(props) {
  const [an, setAn] = useState([]);
  const [correctOption, setCorrectOption] = useState(null);
  const { answers, index, setIndex, setResult, hintNum, setHintNum } = props;
  console.log(index);
  useEffect(() => {
    if (answers.correct_answer) {
      setAn([answers.correct_answer, answers.incorrect_answers].flat());
      setCorrectOption(answers.correct_answer);
    }
  }, [index]);
  // select correct answer and shuffle array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // check array avoid error before user click start
  const arrayCheck = (arr) => {
    return Array.isArray(arr) ? arr : [];
  };
  const hint = () => {
    let random = Math.floor(Math.random() * answers.incorrect_answers.length);
    //select one incorrect question
    if (an.length > 2 && hintNum > 0) {
      setAn(
        shuffleArray([
          answers.correct_answer,
          answers.incorrect_answers[random],
        ])
      );
      setHintNum(hintNum - 1);
    } else if (an.length <= 2) {
      alert('You can only remove once');
    } else {
      alert('You have used up all the tips');
    }
  };
  return (
    <div className='options'>
      {shuffleArray(arrayCheck(an)).map((item, ind) => (
        <OptionItem
          option={item}
          correctOption={correctOption}
          index={index}
          setIndex={setIndex}
          setResult={setResult}
          key={ind}
        />
      ))}
      <div>
        <Button
          onClick={hint}
          style={{ display: answers.correct_answer ? 'block' : 'none' }}
        >
          Click ME to remove two incorrect answers <br /> You have &#160;
          <span className='hintNum'> {hintNum} </span>&#160; times
        </Button>
      </div>
    </div>
  );
}

const OptionItem = memo(function OptionItem(props) {
  const { option, correctOption, index, setIndex, setResult } = props;

  const selectOption = () => {
    setIndex(index + 1); // move to next question
    setResult(correctOption === option); // check answer
  };
  return <Button onClick={selectOption}>{option}</Button>;
});
