import { NavLink } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        Icon
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
            <li className="nav-item">
            
              <NavLink
            className="nav-link" 
            to="/"
          >
            Home
          </NavLink>
            </li>
            <li className="nav-item">
        
                        <NavLink className="nav-link" to="/about"> About</NavLink>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link">Disabled</a> */}
              <NavLink className="nav-link" to="/users"> Users</NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    </header>
    
  );
};

