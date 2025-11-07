import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Ticket from './Ticket.jsx'
import './NavMenu.css';

function Users() {
  return <h1>Users Page</h1>;
}

function Tasks() {
  return (
    <div>
      <h1>Tasks Page</h1>
      <Ticket title="Take out the trash" content="Take the trash to the curb on Tuesdays and Fridays" state="doing"></Ticket>
      <Ticket title="Pet the cat" content="Cat is getting grumpy, pet her." state="done"></Ticket>
    </div>
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

  return (
    <BrowserRouter>
      <div className="nav_container">
        <nav className="nav_menu">
          <Link to="/">Users</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavMenu;

