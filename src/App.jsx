import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import AddEditEmployee from './pages/AddEditEmployee';
import Departments from './pages/Departments';
import Settings from './pages/Settings';
import { getEmployees, saveEmployees } from './utils/storage';
import ToastNotification from './components/ToastNotification';

function App() {
  const [employees, setEmployees] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const handleSetEmployees = (newEmployees) => {
    setEmployees(newEmployees);
    saveEmployees(newEmployees);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard employees={employees} />} />
          <Route path="/employees" element={<Employees employees={employees} setEmployees={handleSetEmployees} showToast={showToast} />} />
          <Route path="/add-employee" element={<AddEditEmployee employees={employees} setEmployees={handleSetEmployees} showToast={showToast} />} />
          <Route path="/employees/edit/:id" element={<AddEditEmployee employees={employees} setEmployees={handleSetEmployees} showToast={showToast} />} />
          <Route path="/departments" element={<Departments employees={employees} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
      {toast.show && <ToastNotification message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />}
    </BrowserRouter>
  );
}

export default App;
