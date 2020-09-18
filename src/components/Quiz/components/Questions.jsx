import React from 'react';
import '../style/questions.css';
import { Descriptions, Alert } from 'antd';
export default function Questions(props) {
  const { question, totalQuestions, index } = props;
  return (
    <div className='question'>
      {` (${index + 1}/ ${totalQuestions})`}
      {<br />}
      {question}
    </div>
  );
}
