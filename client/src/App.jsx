import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Ticket from './Ticket.jsx'
import './App.css';
import UserPage from './UserPage.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Users() {
  return <UserPage></UserPage>;
}

function Tasks() {
  let { user_id } = useParams();

  async function retrieveTicketList(user_id) {
    return await axios.get(`http://localhost:3000/tickets/${user_id}`).then((res) => {
      return res.data;
    });
  }

  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    async function getTicketData() {
      let ticketList = await retrieveTicketList(user_id);
      setTickets(ticketList);
    }

    getTicketData();
  }, []);

  console.log(tickets);

  return (
    <>
      <h1>Tasks Page</h1>
      <div>
        {tickets.map((ticket) => { return <Ticket title={ticket.title} content={ticket.content} state={ticket.status.toLowerCase()}></Ticket> })}
      </div>
    </>
  );
}

function Calendar() {
  return <h1>Calendar Page</h1>;
}

function Settings() {
  return <h1>Settings Page</h1>;
}

// Provides app level navigaton
function NavMenu() {
  const location = useLocation();
  const hideNav = location.pathname === "/";

  return (
    <>
      {!hideNav && (
        <div className="nav_container">
          <nav className="nav_menu">
            <Link to="/">Users</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/settings">Settings</Link>
          </nav>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/tasks/:user_id" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  );
}

export default App;

