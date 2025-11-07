import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavMenu from './NavMenu.jsx';
import axios from 'axios';

async function retrieveUserList() {
  return await axios.get("http://localhost:3000").then((res) => {
    return res.data;
  });
}

function App() {
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
      <div>
        {users?.map((user) => <div key={user.user_id}>{user.username}</div>)}
      </div>
    </>
  )
}

export default App;

