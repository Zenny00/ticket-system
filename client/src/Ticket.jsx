import { useState } from 'react'
import axios from 'axios';
import trashIcon from './assets/delete.png';
import './Ticket.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
        <div className="ticket-footer">
          <div className="ticket-state">
            <p className="ticket-state-text">{props.state}</p>
          </div>
          <div className="ticket-state-change">
            <Select value={props.state}>
              <MenuItem value={"todo"}>To Do</MenuItem>
              <MenuItem value={"doing"}>Doing</MenuItem>
              <MenuItem value={"done"}>Done</MenuItem>
            </Select>
          </div>
          <div className="ticket-rank">

          </div>
        <button onClick={() => setActiv1e(!active)}>
          {active ? "Active" : "Inactive"}
        </button>
        </div>
      </div>
    </>
  )
}

export default Ticket;
