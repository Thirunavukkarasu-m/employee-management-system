import React from 'react';

const DeleteModal = ({ employee, onConfirm, onCancel }) => {
  if (!employee) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title text-danger fw-bold">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>Delete Employee?
              </h5>
              <button type="button" className="btn-close" onClick={onCancel}></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete <strong>{employee.firstName} {employee.lastName}</strong> ({employee.id})?</p>
              <p className="text-muted small mb-0">This action cannot be undone.</p>
            </div>
            <div className="modal-footer border-top-0">
              <button type="button" className="btn btn-light" onClick={onCancel}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={() => onConfirm(employee.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
