import { useState } from 'react'
import axios from 'axios';
import trashIcon from './assets/delete.png';
import './Ticket.css';

function Ticket(props) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="ticket-card">
        <div className="ticket-header">
          <p className="ticket-title">{props.title}</p>
          <img className="ticket-delete-icon" src={trashIcon} />
        </div>
        <p className="ticket-content">{props.content}</p>
        <button onClick={() => setActive(!active)}>
          {active ? "Active" : "Inactive"}
        </button>
      </div>
    </>
  )
}

export default Ticket;
