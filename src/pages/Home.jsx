import React from "react";
import UserList from "../components/UserList/UserList";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to InstaBoard</h1>
      <UserList />
    </div>
  );
};

export default Home;
