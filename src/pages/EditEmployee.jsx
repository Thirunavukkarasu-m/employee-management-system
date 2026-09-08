import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import EmployeeForm from "../componets/EmployeeForm";

import {
  getEmployeeById,
  updateEmployee,
} from "../services/employeeservice";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await getEmployeeById(id);

      setFormData({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
      });
    } catch (error) {
      console.error(error);
      alert("Unable to fetch employee");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee(id, formData);

      alert("Employee updated successfully");

      navigate("/employees");
    } catch (error) {
      console.error(error);

      alert("Unable to update employee");
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h4>Loading employee...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Edit Employee</h2>

      <div className="card p-4">
        <EmployeeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Employee"
        />
      </div>
    </div>
  );
}

export default EditEmployee;