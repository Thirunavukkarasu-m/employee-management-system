import { initialEmployees } from '../data/sampleEmployees';

const STORAGE_KEY = 'employees';
const THEME_KEY = 'theme_settings';

export const getEmployees = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEmployees));
    return initialEmployees;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEmployees));
    return initialEmployees;
  }
};

export const saveEmployees = (employees) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

export const generateId = (employees) => {
  if (!employees || employees.length === 0) return 'EMP001';
  const ids = employees.map(emp => {
    const numStr = emp.id.replace('EMP', '');
    return parseInt(numStr, 10);
  }).filter(n => !isNaN(n));
  if (ids.length === 0) return 'EMP001';
  const maxId = Math.max(...ids);
  return `EMP${String(maxId + 1).padStart(3, '0')}`;
};

export const getTheme = () => {
  return localStorage.getItem(THEME_KEY) || 'light';
};

export const saveTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};
