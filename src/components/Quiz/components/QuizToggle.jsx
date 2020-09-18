import React, { Fragment } from 'react';
import Axios from 'axios';
import { Button } from 'antd';
import '../style/quizToggle.css';
export default function QuizToggle(props) {
  const { setIndex, setQuestionData, setViewed, setLoading } = props;
  const Data = async () => {
    //get question data after click start
    try {
      setLoading(true);
      const incomingData = await Axios.get(`/api/questions.json`);
      setQuestionData(incomingData.data.results);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <h1 className='title'>Quiz</h1>

      <Button
        className='toggle'
        onClick={(e) => {
          e.preventDefault();
          Data();
          setViewed(false);
          setIndex(0);
        }}
      >
        Start
      </Button>
    </Fragment>
  );
}
