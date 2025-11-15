import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Ticket from './Ticket.jsx'
import './App.css';
import UserPage from './UserPage.jsx';

function Users() {
  return <UserPage></UserPage>;
}

function Tasks() {
  let { user_id } = useParams();
  console.log(user_id);

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

