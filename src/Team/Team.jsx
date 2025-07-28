
import React, { useState, useEffect } from "react";
import "./Team.css";
import UserCard from "../components/UserCard/UserCard";
import UserList from '../components/UserList/UserList';


const Team = () => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(12); // عدد المستخدمين المطلوب جلبهم
  const [loading, setLoading] = useState(false);

  // جلب البيانات
  const fetchUsers = async (count) => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  // جلب أول مرة أو عند تغيير عدد النتائج
  useEffect(() => {
    fetchUsers(results);
  }, [results]);

  // تحميل المزيد (زيادة العدد بـ 12)
  const loadMore = () => {
    setResults(results + 12);
  };

  return (
    <div>
      <h1>Team Members</h1>
      <div>
        <label>
          Number of results:
          <input
            type="number"
            min="1"
            max="100"
            value={results}
            onChange={(e) => setResults(Number(e.target.value))}
          />
        </label>
      </div>
      {loading && <p>Loading users...</p>}
      <div className="user-list">
        {users.map((user, index) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
      <button onClick={loadMore} disabled={loading}>
        Load More
      </button>
    </div>
  );
};

export default Team;
