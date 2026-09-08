import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom shadow-sm px-3 sticky-top">
      <div className="container-fluid">
        <span className="navbar-brand d-md-none fw-bold text-primary">
          <i className="bi bi-people-fill me-2"></i>EMS
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-primary fw-bold" id="sidebarOffcanvasLabel">
              <i className="bi bi-people-fill me-2"></i>EMS Admin
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 d-md-none gap-2">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} data-bs-dismiss="offcanvas">
                   Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/employees" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} data-bs-dismiss="offcanvas">
                   Employees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-employee" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} data-bs-dismiss="offcanvas">
                   Add Employee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/departments" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} data-bs-dismiss="offcanvas">
                   Departments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} data-bs-dismiss="offcanvas">
                   Settings
                </NavLink>
              </li>
            </ul>
            <div className="d-none d-md-flex ms-auto align-items-center">
               <div className="dropdown">
                 <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                   <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="admin" width="32" height="32" className="rounded-circle" />
                 </a>
                 <ul className="dropdown-menu dropdown-menu-end text-small shadow">
                   <li><a className="dropdown-item" href="#">Profile</a></li>
                   <li><hr className="dropdown-divider" /></li>
                   <li><a className="dropdown-item" href="#">Sign out</a></li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
