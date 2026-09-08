import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-none d-md-flex flex-column p-3 bg-body-tertiary border-end shadow-sm" style={{ width: '250px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <span className="fs-4 fw-bold text-primary"><i className="bi bi-people-fill me-2"></i>EMS Admin</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/employees" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
            <i className="bi bi-person-lines-fill me-2"></i> Employees
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-employee" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
            <i className="bi bi-person-plus-fill me-2"></i> Add Employee
          </NavLink>
        </li>
        <li>
          <NavLink to="/departments" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
            <i className="bi bi-building me-2"></i> Departments
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
            <i className="bi bi-gear-fill me-2"></i> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
