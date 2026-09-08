import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2 className="fw-bold mb-4">Settings</h2>
      
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-header bg-transparent border-bottom-0 pt-4 pb-2 px-4">
          <h5 className="fw-bold mb-0">Appearance</h5>
        </div>
        <div className="card-body px-4 pb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1 fw-bold">Dark Mode</h6>
              <p className="text-muted small mb-0">Toggle between light and dark theme.</p>
            </div>
            <div className="form-check form-switch fs-4">
              <input 
                className="form-check-input" 
                type="checkbox" 
                role="switch" 
                id="themeSwitch" 
                checked={theme === 'dark'} 
                onChange={toggleTheme} 
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-header bg-transparent border-bottom-0 pt-4 pb-2 px-4">
          <h5 className="fw-bold mb-0">About Application</h5>
        </div>
        <div className="card-body px-4 pb-4">
          <p><strong>Employee Management System</strong></p>
          <p className="text-muted small mb-1">Version: 1.0.0</p>
          <p className="text-muted small">Storage: Browser LocalStorage (Frontend only)</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
