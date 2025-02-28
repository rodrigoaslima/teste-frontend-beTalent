export const fetchEmployees = async () => {
  const response = await fetch('http://localhost:3000/employees');
 
  if(!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  const employees = await response.json();
  return employees;
}