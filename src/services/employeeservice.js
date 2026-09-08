
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getEmployees = () => {
  return axios.get(API_URL);
};

export const getEmployeeById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createEmployee = (employeeData) => {
  return axios.post(API_URL, employeeData);
};

export const updateEmployee = (id, employeeData) => {
  return axios.put(`${API_URL}/${id}`, employeeData);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};