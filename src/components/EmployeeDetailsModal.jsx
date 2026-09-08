import React from 'react';

const EmployeeDetailsModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content shadow-lg border-0">
            <div className="modal-header border-bottom-0 bg-primary bg-opacity-10">
              <h5 className="modal-title fw-bold text-primary">Employee Profile</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body p-0">
              <div className="d-flex flex-column flex-md-row p-4 border-bottom">
                <div className="me-md-4 mb-3 mb-md-0 text-center">
                  {employee.profileImage ? (
                    <img src={employee.profileImage} alt={employee.firstName} className="rounded-circle border border-3 border-white shadow-sm" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  ) : (
                    <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex justify-content-center align-items-center border border-3 border-white shadow-sm mx-auto fw-bold" style={{ width: '120px', height: '120px', fontSize: '3rem' }}>
                      {employee.firstName[0]}{employee.lastName[0]}
                    </div>
                  )}
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h3 className="fw-bold mb-1">{employee.firstName} {employee.lastName}</h3>
                  <p className="text-muted mb-2 fs-5">{employee.designation} <span className="mx-2">•</span> {employee.department}</p>
                  <div>
                    <span className={`badge rounded-pill px-3 py-2 bg-${employee.status === 'Active' ? 'success' : employee.status === 'Inactive' ? 'danger' : 'warning'} me-2`}>
                      {employee.status}
                    </span>
                    <span className="badge rounded-pill bg-secondary bg-opacity-10 text-secondary px-3 py-2 border">ID: {employee.id}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 row g-4">
                <div className="col-12 col-md-6">
                  <h6 className="text-primary fw-bold mb-3"><i className="bi bi-person-lines-fill me-2"></i>Contact Details</h6>
                  <div className="mb-2"><strong className="text-muted d-block small">Email</strong> {employee.email}</div>
                  <div className="mb-2"><strong className="text-muted d-block small">Phone</strong> {employee.phone}</div>
                  <div className="mb-2"><strong className="text-muted d-block small">Address</strong> {employee.address || 'N/A'}</div>
                  <div className="mb-2"><strong className="text-muted d-block small">Location</strong> {employee.location || 'N/A'}</div>
                </div>
                <div className="col-12 col-md-6">
                  <h6 className="text-primary fw-bold mb-3"><i className="bi bi-briefcase-fill me-2"></i>Work Details</h6>
                  <div className="mb-2"><strong className="text-muted d-block small">Employment Type</strong> {employee.employmentType}</div>
                  <div className="mb-2"><strong className="text-muted d-block small">Experience</strong> {employee.experience ? `${employee.experience} Years` : 'N/A'}</div>
                  <div className="mb-2"><strong className="text-muted d-block small">Joining Date</strong> {employee.joiningDate}</div>
                  <div className="mb-2"><strong className="text-muted d-block small">Salary</strong> ${Number(employee.salary).toLocaleString()}</div>
                </div>
                <div className="col-12 border-top pt-4">
                  <h6 className="text-primary fw-bold mb-3"><i className="bi bi-person-fill me-2"></i>Personal Info</h6>
                  <div className="row">
                    <div className="col-6 col-md-3 mb-2"><strong className="text-muted d-block small">Gender</strong> {employee.gender}</div>
                    <div className="col-6 col-md-3 mb-2"><strong className="text-muted d-block small">Date of Birth</strong> {employee.dob || 'N/A'}</div>
                    <div className="col-12 col-md-6 mb-2"><strong className="text-muted d-block small">Skills</strong> {employee.skills || 'N/A'}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-top-0">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetailsModal;
