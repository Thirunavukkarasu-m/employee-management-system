import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { generateId } from '../utils/storage';

const AddEditEmployee = ({ employees, setEmployees, showToast }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    dob: '',
    profileImage: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    department: 'IT',
    designation: '',
    employmentType: 'Full Time',
    experience: '',
    skills: '',
    salary: '',
    joiningDate: '',
    status: 'Active'
  });

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (isEditing) {
      const emp = employees.find(e => e.id === id);
      if (emp) {
        setFormData(emp);
      } else {
        showToast('Employee not found', 'danger');
        navigate('/employees');
      }
    }
  }, [id, employees, navigate, showToast, isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (isEditing) {
      const updatedEmployees = employees.map(emp => emp.id === id ? { ...formData, id } : emp);
      setEmployees(updatedEmployees);
      showToast('Employee updated successfully!');
    } else {
      const newId = generateId(employees);
      const newEmployee = { ...formData, id: newId };
      setEmployees([...employees, newEmployee]);
      showToast('Employee added successfully!');
    }
    navigate('/employees');
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">{isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left me-2"></i>Back
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
            
            <h5 className="text-primary fw-bold mb-3 border-bottom pb-2">Personal Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-bold">First Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please enter employee first name.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Last Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please enter employee last name.</div>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Gender</label>
                <select className="form-select" name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Date of Birth</label>
                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleInputChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Profile Image</label>
                <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
              </div>
            </div>

            <h5 className="text-primary fw-bold mb-3 border-bottom pb-2">Contact Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-bold">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please enter a valid email address.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Phone <span className="text-danger">*</span></label>
                <input type="tel" className="form-control" pattern="[0-9]{10,15}" name="phone" value={formData.phone} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please enter a valid phone number.</div>
              </div>
              <div className="col-12">
                <label className="form-label fw-bold">Address</label>
                <textarea className="form-control" rows="2" name="address" value={formData.address} onChange={handleInputChange}></textarea>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Location</label>
                <input type="text" className="form-control" name="location" value={formData.location} onChange={handleInputChange} />
              </div>
            </div>

            <h5 className="text-primary fw-bold mb-3 border-bottom pb-2">Professional Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label fw-bold">Department <span className="text-danger">*</span></label>
                <select className="form-select" name="department" value={formData.department} onChange={handleInputChange} required>
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
              <div className="col-md-4">
                <label className="form-label fw-bold">Designation <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please enter a designation.</div>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Employment Type <span className="text-danger">*</span></label>
                <select className="form-select" name="employmentType" value={formData.employmentType} onChange={handleInputChange} required>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Intern">Intern</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Experience (Years)</label>
                <input type="number" min="0" className="form-control" name="experience" value={formData.experience} onChange={handleInputChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Salary <span className="text-danger">*</span></label>
                <input type="number" min="0" className="form-control" name="salary" value={formData.salary} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please enter a valid salary amount.</div>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Joining Date <span className="text-danger">*</span></label>
                <input type="date" className="form-control" name="joiningDate" value={formData.joiningDate} onChange={handleInputChange} required />
                <div className="invalid-feedback">Please select a joining date.</div>
              </div>
              <div className="col-md-8">
                <label className="form-label fw-bold">Skills</label>
                <input type="text" className="form-control" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Comma separated values" />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Status</label>
                <select className="form-select" name="status" value={formData.status} onChange={handleInputChange}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="On Leave">On Leave</option>
                </select>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn btn-light" onClick={() => navigate(-1)}>Cancel</button>
              <button type="submit" className="btn btn-primary px-4 fw-bold">
                <i className="bi bi-save me-2"></i>{isEditing ? 'Update Employee' : 'Save Employee'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditEmployee;
