# Employee Management System

A completely frontend-only React CRUD application for managing employee records, built with modern React, Bootstrap 5, and LocalStorage.

## Live Demo Link
https://employee-management-system-curd.netlify.app/

## Features
- **Create Employee:** Add new employees with detailed professional and personal information.
- **Read Employees:** View a comprehensive, responsive table of employees with modal profiles.
- **Update Employee:** Edit existing employee records.
- **Delete Employee:** Safely delete records using a custom confirmation modal.
- **Search:** Real-time multi-field search across employee records.
- **Filter:** Filter by Department, Status, and Employment Type.
- **Sort:** Dynamic sorting options (A-Z, Z-A, Salary, Joining Date).
- **Pagination:** Auto-adjusting pagination built from scratch.
- **Dashboard:** At-a-glance summary cards and recent additions.
- **Departments:** Overview of department statistics.
- **Dark Mode:** Fully supported dark mode, persisted via LocalStorage.
- **Responsive Design:** Completely responsive layout working seamlessly across mobile, tablet, and desktop devices.
- **LocalStorage:** All data is safely stored in the browser. 15 realistic sample employees are generated on first load.
- **Toast Notifications:** Built-in alerts for CRUD operations.

## Technologies
- React JS (Functional Components, Hooks)
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap 5 (Styling & Layout)
- Bootstrap Icons
- Browser LocalStorage

## Installation

This is a Vite-based React project. To run the application locally:

1. Extract the `employee-management-system.zip`
2. Open terminal in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/components/`: Reusable UI elements (Navbar, Sidebar, Modals, Pagination).
- `src/pages/`: Main application views (Dashboard, Employees, AddEditEmployee, Departments, Settings).
- `src/context/`: Theme context for Dark/Light mode.
- `src/utils/`: LocalStorage data management functions.
- `src/data/`: `sampleEmployees.js` containing the initial dummy data.

## Future Improvements
While this is a frontend-only demonstration, future enhancements could include:
- Backend integration (Node.js/Express, Python/Django)
- Authentication & Role-based access control
- Cloud Database (PostgreSQL, MongoDB)
- REST or GraphQL API
- Cloud image storage for profile pictures (AWS S3, Cloudinary)
