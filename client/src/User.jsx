import delete_icon from './assets/delete.png';
import './User.css';
import {
  Link,
  useParams
} from "react-router-dom";

// Represents a user
function User(props) {

  return (
    <div className="user_container" key={props.user_id}>
      <div className="user_icon">
      </div>
      <div className="user_name">
        <Link to={`/tasks/${props.user_id}`}>{props.username}</Link>
      </div>

      <div className="user_delete">
        <svg className="delete_icon" fill="none" stroke="#A20D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14H6L5 6"/>
          <path d="M10 11v6"/>
          <path d="M14 11v6"/>
          <path d="M9 6V4h6v2"/>
        </svg>
      </div>
    </div>
  );
}

export default User;
