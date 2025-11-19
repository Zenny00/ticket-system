import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './UserPage.css';
import axios from 'axios';
import User from './User.jsx';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

async function retrieveUserList() {
  return await axios.get("http://localhost:3000/users").then((res) => {
    return res.data;
  });
}

function UserPage() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  // Helpers to handle opening and closing the modal
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSubmit = (formContent) => {
    console.log(formContent);
  };
  
  useEffect(() => {

    async function getUserData() {
      let userList = await retrieveUserList();
      setUsers(userList);
    }

    getUserData();
  }, []);

  return (
    <>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box>
          <Typography id="modal-title" variant="h5" component="h2">Create User</Typography>
          <Typography id="modal-description">Username</Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <TextField
              label="Username"
              name="username"
              fullWidth
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">Submit</Button>
            </Box>
          </form>
        </Box>
      </Modal>
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
        <Button className="create_user_button" onClick={handleOpen}>Create New User</Button>
      </div>
    </>
  )
}

export default UserPage;

