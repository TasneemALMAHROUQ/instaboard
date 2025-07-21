import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=12');
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  const handleLoadMore = () => {
    fetchUsers(); // Fetch 12 new users and replace the current list
  };

 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredUsers = users.filter((user) =>
    (`${user.name.first} ${user.name.last}`)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`user-list-container ${darkMode ? 'dark' : ''}`}>
      <h1>InstaBoard</h1>

 
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

    
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />


      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <UserCard
            key={index}
            picture={user.picture.medium}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
          />
        ))}
      </div>

   
      <button className="load-more-btn" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}
