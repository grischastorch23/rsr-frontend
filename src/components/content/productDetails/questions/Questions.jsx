import React, { useState } from 'react';
import './Questions.css';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question">
      <div className="question-header" onClick={toggle}>
        <span className="question-text">{question}</span>
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const Questions = () => {
  const faq = [
    { question: 'Frage 1?', answer: '' },
    { question: 'Frage 2?', answer: 'Antwort' },
  ];

  return (
    <div className="faq">
      <h2>Häufige Fragen</h2>
      {faq.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Questions;