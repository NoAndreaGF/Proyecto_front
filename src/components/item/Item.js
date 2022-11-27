import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({ name, icon }) {
  return (
    <>
      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i>
            <FontAwesomeIcon icon={icon} className="fas fa-fw -alt" />
          </i>
          <span>{name}</span>
        </a>
      </li>
    </>
  );
}

export default Item;