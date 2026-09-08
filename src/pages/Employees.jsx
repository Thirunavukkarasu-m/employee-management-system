import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import Pagination from '../components/Pagination';
import EmptyState from '../components/EmptyState';
import EmployeeDetailsModal from '../components/EmployeeDetailsModal';

const Employees = ({ employees, setEmployees, showToast }) => {
  const [searchParams] = useSearchParams();
  const queryDept = searchParams.get('dept');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState(queryDept || 'All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [viewTarget, setViewTarget] = useState(null);

  useEffect(() => {
    if (queryDept) {
      setDepartmentFilter(queryDept);
    }
  }, [queryDept]);

  const filteredAndSorted = useMemo(() => {
    let result = [...employees];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(emp => 
        emp.firstName.toLowerCase().includes(q) ||
        emp.lastName.toLowerCase().includes(q) ||
        emp.id.toLowerCase().includes(q) ||
        emp.email.toLowerCase().includes(q) ||
        emp.department.toLowerCase().includes(q) ||
        emp.designation.toLowerCase().includes(q) ||
        emp.location.toLowerCase().includes(q)
      );
    }

    if (departmentFilter !== 'All') {
      result = result.filter(emp => emp.department === departmentFilter);
    }
    if (statusFilter !== 'All') {
      result = result.filter(emp => emp.status === statusFilter);
    }
    if (typeFilter !== 'All') {
      result = result.filter(emp => emp.employmentType === typeFilter);
    }

    switch (sortBy) {
      case 'A-Z':
        result.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case 'Z-A':
        result.sort((a, b) => b.firstName.localeCompare(a.firstName));
        break;
      case 'Low-High':
        result.sort((a, b) => Number(a.salary) - Number(b.salary));
        break;
      case 'High-Low':
        result.sort((a, b) => Number(b.salary) - Number(a.salary));
        break;
      case 'Oldest':
        result.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
        break;
      case 'Newest':
      default:
        result.sort((a, b) => new Date(b.joiningDate) - new Date(a.joiningDate));
        break;
    }

    return result;
  }, [employees, searchQuery, departmentFilter, statusFilter, typeFilter, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
  const currentData = filteredAndSorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleDeleteConfirm = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    showToast('Employee deleted successfully!');
    setDeleteTarget(null);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <h2 className="fw-bold mb-0">Employees</h2>
        <Link to="/add-employee" className="btn btn-primary shadow-sm">
          <i className="bi bi-plus-lg me-2"></i>Add Employee
        </Link>
      </div>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body bg-body-tertiary rounded">
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-muted"></i></span>
                <input 
                  type="text" 
                  className="form-control border-start-0 ps-0" 
                  placeholder="Search employees..." 
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select" value={departmentFilter} onChange={e => { setDepartmentFilter(e.target.value); setCurrentPage(1); }}>
                <option value="All">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Operations">Operations</option>
                <option value="Design">Design</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select" value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setCurrentPage(1); }}>
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select" value={typeFilter} onChange={e => { setTypeFilter(e.target.value); setCurrentPage(1); }}>
                <option value="All">All Types</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Intern">Intern</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select" value={sortBy} onChange={e => { setSortBy(e.target.value); setCurrentPage(1); }}>
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
                <option value="A-Z">Name: A-Z</option>
                <option value="Z-A">Name: Z-A</option>
                <option value="Low-High">Salary: Low to High</option>
                <option value="High-Low">Salary: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          {filteredAndSorted.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4 text-muted small text-uppercase">Employee</th>
                    <th className="text-muted small text-uppercase">ID</th>
                    <th className="text-muted small text-uppercase">Department</th>
                    <th className="text-muted small text-uppercase">Designation</th>
                    <th className="text-muted small text-uppercase">Status</th>
                    <th className="text-muted small text-uppercase text-end pe-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((emp) => (
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
                            <div className="fw-bold text-body">{emp.firstName} {emp.lastName}</div>
                            <div className="text-muted small">{emp.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="fw-medium">{emp.id}</td>
                      <td>{emp.department}</td>
                      <td>
                        <div>{emp.designation}</div>
                        <div className="text-muted small">{emp.employmentType}</div>
                      </td>
                      <td>
                        <span className={`badge rounded-pill px-3 py-2 bg-${emp.status === 'Active' ? 'success' : emp.status === 'Inactive' ? 'danger' : 'warning'}`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="text-end pe-4">
                        <div className="btn-group shadow-sm">
                          <button className="btn btn-sm btn-light text-primary border" title="View" onClick={() => setViewTarget(emp)}>
                            <i className="bi bi-eye"></i>
                          </button>
                          <Link to={`/employees/edit/${emp.id}`} className="btn btn-sm btn-light text-secondary border" title="Edit">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-light text-danger border" title="Delete" onClick={() => setDeleteTarget(emp)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      
      {deleteTarget && <DeleteModal employee={deleteTarget} onConfirm={handleDeleteConfirm} onCancel={() => setDeleteTarget(null)} />}
      {viewTarget && <EmployeeDetailsModal employee={viewTarget} onClose={() => setViewTarget(null)} />}
    </div>
  );
};

export default Employees;
