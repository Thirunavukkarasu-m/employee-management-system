import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";
import { createEmployee } from "../services/employeeservice";

function AddEmployee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createEmployee(formData);

      alert("Employee added successfully");

      navigate("/employees");
    } catch (error) {
      console.error(error);

      alert("Unable to add employee");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Employee</h2>

      <div className="card p-4">
        <EmployeeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Add Employee"
        />
      </div>
    </div>
  );
}

export default AddEmployee;