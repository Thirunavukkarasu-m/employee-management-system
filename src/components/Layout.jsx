import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`d-flex ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>
        <Navbar />
        <main className="p-3 p-md-4 flex-grow-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
