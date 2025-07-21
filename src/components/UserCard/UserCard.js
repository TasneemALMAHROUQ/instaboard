import React, { useState } from 'react';
import './UserCard.css';

export default function UserCard({ picture, name, email }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="user-card">
      <img src={picture} alt={name} className="user-image" />
      <h2>{name}</h2>
      {showEmail && <p>{email}</p>}
      <button onClick={toggleEmail}>
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}
