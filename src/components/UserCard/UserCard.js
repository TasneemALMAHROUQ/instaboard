import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

export default function UserCard({ user }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedUsers = JSON.parse(localStorage.getItem('likedUsers')) || [];
    const isLiked = likedUsers.some(u => u.login?.uuid === user.login?.uuid);
    setLiked(isLiked);
  }, [user.login?.uuid]);

  const toggleLike = () => {
    const likedUsers = JSON.parse(localStorage.getItem('likedUsers')) || [];
    if (liked) {
      const newLikedUsers = likedUsers.filter(u => u.login?.uuid !== user.login?.uuid);
      localStorage.setItem('likedUsers', JSON.stringify(newLikedUsers));
      setLiked(false);
    } else {
      likedUsers.push(user);
      localStorage.setItem('likedUsers', JSON.stringify(likedUsers));
      setLiked(true);
    }
  };

  return (
    <div className="user-card">
      <img
        src={user.picture?.medium}
        alt={`${user.name?.first} ${user.name?.last}`}
        className="user-image"
      />
      <h2>{user.name?.first} {user.name?.last}</h2>

      <button className={`like-btn ${liked ? 'liked' : ''}`} onClick={toggleLike}>
        {liked ? '💔 Unlike' : '❤️ Like'}
      </button>

      <Link
  to={`/team/${user.login?.uuid}`}
  state={{ user }}
  className="view-profile-btn"
>
  View Profile
</Link>

    </div>
  );
}
