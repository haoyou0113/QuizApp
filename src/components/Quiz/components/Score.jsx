import React from 'react';
import { Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import '../style/score.css';
export default function Score(props) {
  const {
    rightAnswer,
    setRightAnswer,
    totalQuestions,
    score,
    setGameOver,
    setViewed,
    setHintNum,
  } = props;
  const restart = () => {
    setViewed(true);
    setGameOver(false);
    setRightAnswer(0);
    setHintNum(2);
  };
  return (
    <div>
      <Result
        icon={<SmileOutlined />}
        title={
          <div>
            <h1>
              You got {rightAnswer} out of {totalQuestions}{' '}
            </h1>
            <h2>
              Your score: {''}
              {score.toFixed(2) * 100}
            </h2>
          </div>
        }
        extra={
          <Button className='reStart' type='primary' onClick={restart}>
            Restart
          </Button>
        }
      />
    </div>
  );
}
