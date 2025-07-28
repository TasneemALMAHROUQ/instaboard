// src/LikedUsers.jsx
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard/UserCard"; // تأكدي من المسار الصحيح
import "./components/UserList/UserList.css"; // لإظهارهم كشبكة

const LikedUsers = () => {
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    const storedLikedUsers = JSON.parse(localStorage.getItem("likedUsers")) || [];
    setLikedUsers(storedLikedUsers);
  }, []);

  return (
    <div className="user-list-container">
      <h2>Liked Users</h2>
      <div className="user-list">
        {likedUsers.length === 0 ? (
          <p>No liked users found.</p>
        ) : (
          likedUsers.map((user, index) => (
            <UserCard key={user.login.uuid || index} user={user} />
          ))
        )}
      </div>
    </div>
  );
};

export default LikedUsers;
