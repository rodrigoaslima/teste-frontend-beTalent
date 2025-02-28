import { create } from "zustand";
import { fetchEmployees } from "../services/employeesService";

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeeStoreState {
    employees: Employee[];
    filteredEmployees: Employee[];
    loading: boolean;
    error: string;
    searchEmployee: string;
    fetchEmployees: () => Promise<void>;
    setSeachEmployee: (search: string) => void;
}

interface FormattedEmployee extends Employee {
    admission_date: string;
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
  
    return `${day}/${month}/${year}`;
};

const formatPhoneNumber = (phone: string): string => {
    const countryCode = phone.slice(0, 2); 
    const areaCode = phone.slice(2, 4); 
    const firstPart = phone.slice(4, 9);
    const secondPart = phone.slice(9);

    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};

const useEmployeeStore = create<EmployeeStoreState>((set,get) => ({
    employees: [],
    filteredEmployees: [],
    loading: false,
    error: '',
    searchEmployee: '',

    fetchEmployees: async () => {
        set({ loading: true });
        try {
            const employees = await fetchEmployees();
            
            const formattedEmployees: FormattedEmployee[] = employees.map((employee: Employee) => ({
                ...employee,
                admission_date: formatDate(employee.admission_date),
                phone: formatPhoneNumber(employee.phone)
            })); 
            
            set({ employees: formattedEmployees, loading: false, filteredEmployees: formattedEmployees });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },

    setSeachEmployee: (search: string) => {
        set({ searchEmployee: search });
        const { employees } = get();
    
        const filteredEmployees = search
            ? employees.filter((employee) => {
                return (
                    employee.name.toLowerCase().includes(search.toLowerCase()) ||
                    employee.job.toLowerCase().includes(search.toLowerCase()) ||
                    employee.phone.toLowerCase().includes(search.toLowerCase())
                );
            })
            : employees;
    
        set({ filteredEmployees });
    }
}));

export default useEmployeeStore;