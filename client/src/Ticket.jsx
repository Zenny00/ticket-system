import { useState } from 'react'
import axios from 'axios';

function Ticket(props) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="card">
        <p>{props.name}</p>
        <button onClick={() => setActive(!active)}>
          {active ? "Active" : "Inactive"}
        </button>
      </div>
    </>
  )
}

export default Ticket;
