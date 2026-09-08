import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, value, icon, color }) => (
  <div className="col-12 col-sm-6 col-xl-3 mb-4">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body d-flex align-items-center">
        <div className={`flex-shrink-0 bg-${color} bg-opacity-10 text-${color} rounded p-3 me-3`}>
          <i className={`bi ${icon} fs-3`}></i>
        </div>
        <div>
          <h3 className="card-title fw-bold mb-1">{value}</h3>
          <p className="card-text text-muted mb-0">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = ({ employees }) => {
  const stats = useMemo(() => {
    const total = employees.length;
    const active = employees.filter(e => e.status === 'Active').length;
    const inactive = employees.filter(e => e.status === 'Inactive').length;
    const departments = new Set(employees.map(e => e.department)).size;
    return { total, active, inactive, departments };
  }, [employees]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Dashboard</h2>
        <Link to="/add-employee" className="btn btn-primary shadow-sm">
          <i className="bi bi-plus-lg me-2"></i>Add Employee
        </Link>
      </div>

      <div className="row">
        <DashboardCard title="Total Employees" value={stats.total} icon="bi-people-fill" color="primary" />
        <DashboardCard title="Active Employees" value={stats.active} icon="bi-person-check-fill" color="success" />
        <DashboardCard title="Inactive Employees" value={stats.inactive} icon="bi-person-x-fill" color="danger" />
        <DashboardCard title="Departments" value={stats.departments} icon="bi-building" color="warning" />
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-transparent border-bottom-0 pt-4 pb-2 px-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">Recent Additions</h5>
              <Link to="/employees" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="ps-4">Employee</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.slice(-5).reverse().map(emp => (
                      <tr key={emp.id}>
                        <td className="ps-4">
                          <div className="d-flex align-items-center">
                            {emp.profileImage ? (
                              <img src={emp.profileImage} alt={emp.firstName} className="rounded-circle me-3" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                            ) : (
                              <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex justify-content-center align-items-center me-3 fw-bold" style={{ width: '40px', height: '40px' }}>
                                {emp.firstName[0]}{emp.lastName[0]}
                              </div>
                            )}
                            <div>
                              <div className="fw-bold">{emp.firstName} {emp.lastName}</div>
                              <div className="text-muted small">{emp.id}</div>
                            </div>
                          </div>
                        </td>
                        <td>{emp.department}</td>
                        <td>{emp.designation}</td>
                        <td>
                          <span className={`badge rounded-pill bg-${emp.status === 'Active' ? 'success' : emp.status === 'Inactive' ? 'danger' : 'warning'}`}>
                            {emp.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {employees.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-muted">No recent employees</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
