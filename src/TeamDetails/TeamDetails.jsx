
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TeamDetails.css"; 

const TeamDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
 
    return (
      <div>
        <h2>No user data found!</h2>
        <button onClick={() => navigate("/team")}>Back to Team</button>
      </div>
    );
  }

  return (
    <div className="team-details">
      <h1>
        {user.name.title} {user.name.first} {user.name.last}
      </h1>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p>
        <strong>Address:</strong> {user.location.street.number} {user.location.street.name},{" "}
        {user.location.city}, {user.location.state}, {user.location.country} - {user.location.postcode}
      </p>
      <button onClick={() => navigate("/team")}>Back to Team</button>
    </div>
  );
};

export default TeamDetails;

