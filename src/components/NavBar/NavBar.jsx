import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://acdn.mitiendanube.com/stores/003/189/220/themes/common/logo-828044330-1715130728-02666d469808b0552b27e0ea35be5b3f1715130728.ico?0"
            alt="Logo"
            className="d-inline-block align-top me-3"
            height="30"
          />
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "ActiveOption nav-link dropdown-toggle"
                    : "Option nav-link dropdown-toggle"
                }
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/category/proteina">
                    Proteinas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/creatina">
                    Creatinas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/vitamina">
                    Vitaminas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/colageno">
                    Colageno
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/gainer">
                    Ganador de Masa
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Todos los productos
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption nav-link" : "Option nav-link"
                }
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption nav-link" : "Option nav-link"
                }
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption nav-link" : "Option nav-link"
                }
                to="/faq"
              >
                Preguntas Frecuentes
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <CardWidget />
            <button
              type="button"
              className="btn btn-outline-light ms-3"
              aria-label="notifications"
            >
              <i className="bi bi-bell"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

