import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './UserPage.css';
import axios from 'axios';
import User from './User.jsx';

async function retrieveUserList() {
  return await axios.get("http://localhost:3000/users").then((res) => {
    return res.data;
  });
}

function UserPage() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {

    async function getUserData() {
      let userList = await retrieveUserList();
      setUsers(userList);
    }

    getUserData();
  }, []);

  return (
    <>
      <div className="app_header">
        <div className="app_title">
          Retro Task
        </div>
      </div>
      <div className="user_content">
        <div className="user_list">
          <div className="user_list_title">
            Select A User
          </div>
          {users?.map((user) => <User user_id={user.user_id} username={user.username}></User>)}
        </div>
      </div>
    </>
  )
}

export default UserPage;

