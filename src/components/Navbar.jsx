import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById('sidebarOffcanvas');
    if (offcanvasElement) {
      const closeBtn = offcanvasElement.querySelector('.btn-close');
      if (closeBtn) closeBtn.click();
    }
  };

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
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} onClick={closeOffcanvas}>
                   Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/employees" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} onClick={closeOffcanvas}>
                   Employees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-employee" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} onClick={closeOffcanvas}>
                   Add Employee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/departments" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} onClick={closeOffcanvas}>
                   Departments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active text-primary fw-bold' : ''}`} onClick={closeOffcanvas}>
                   Settings
                </NavLink>
              </li>
            </ul>
            <div className="d-none d-md-flex ms-auto align-items-center">
               <div className="dropdown">
                 <button className="btn btn-link link-body-emphasis text-decoration-none dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="admin" width="32" height="32" className="rounded-circle" />
                 </button>
                 <ul className="dropdown-menu dropdown-menu-end text-small shadow">
                   <li><Link className="dropdown-item" to="/settings">Profile</Link></li>
                   <li><hr className="dropdown-divider" /></li>
                   <li><button className="dropdown-item" type="button">Sign out</button></li>
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

