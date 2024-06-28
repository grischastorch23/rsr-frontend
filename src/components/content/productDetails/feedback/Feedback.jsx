import React from 'react';
import './Feedback.css';

const Feedback = () => {
  const reviews = [
    { user: 'User01', text: 'Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraul quis pharetra arcu pharetra blandit.', rating: 5 },
    { user: 'User02', text: 'Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraul quis pharetra arcu pharetra blandit.', rating: 5 },
    { user: 'User03', text: 'Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraul quis pharetra arcu pharetra blandit.', rating: 5 },
  ];

  return (
    <div className="feedback-container">
      <h2>Was unsere Kunden sagen</h2>
      <a href="#bewertung" className="write-review" id='write-review'>Schreibe eine Bewertung!</a>
      <div className="reviews" id='reviews'>
        {reviews.map((review, index) => (
          <div key={index} className="review-card" id='review-card'>
            <div className="stars" id='stars'>
              {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
            </div>
            <p>"{review.text}"</p>
            <p className="user" id='user'>{review.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
