import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

function Brand() {
  return (
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <FontAwesomeIcon icon={faCubes} className="fa-2x" />
      </div>
      <div className="sidebar-brand-text mx-3">MAO Inventario</div>
    </a>
  );
}

export default Brand;
