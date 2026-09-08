import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Departments = ({ employees }) => {
  const navigate = useNavigate();
  
  const departmentStats = useMemo(() => {
    const stats = {};
    employees.forEach(emp => {
      if (!stats[emp.department]) {
        stats[emp.department] = { total: 0, active: 0 };
      }
      stats[emp.department].total += 1;
      if (emp.status === 'Active') {
        stats[emp.department].active += 1;
      }
    });
    return Object.entries(stats).map(([name, data]) => ({ name, ...data })).sort((a, b) => b.total - a.total);
  }, [employees]);

  return (
    <div>
      <h2 className="fw-bold mb-4">Departments</h2>
      <div className="row g-4">
        {departmentStats.map(dept => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={dept.name}>
            <div 
              className="card h-100 shadow-sm border-0" 
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onClick={() => navigate(`/employees?dept=${encodeURIComponent(dept.name)}`)}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-building fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3">{dept.name}</h4>
                <div className="d-flex justify-content-between text-muted small px-3">
                  <div className="text-center">
                    <span className="d-block fw-bold text-body fs-5">{dept.total}</span>
                    Total
                  </div>
                  <div className="text-center">
                    <span className="d-block fw-bold text-success fs-5">{dept.active}</span>
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {departmentStats.length === 0 && (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No departments found</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;
