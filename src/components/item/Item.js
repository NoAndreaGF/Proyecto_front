import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Item({ name, icon, link }) {
  return (
    <>
      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to={link}>
          <i>
            <FontAwesomeIcon icon={icon} className="fas fa-fw -alt" />
          </i>
          <span>{name}</span>
        </Link>
      </li>
    </>
  );
}

export default Item;
