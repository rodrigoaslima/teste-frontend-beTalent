import Input from "../Input";
import { Container, EmployeeImage, MenuWrapper, Table, TableCell, TableHeader, TableRow, Title } from "./styles";

interface Employee {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
}
  
interface EmployessWebProps {
    loading: boolean;
    error: string;
    filteredEmployees: Employee[];
}

const Employees = ({error,filteredEmployees,loading}: EmployessWebProps) => {
    
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return(
        <Container>
            <MenuWrapper>
                <Title>Funcionários</Title>
                <Input />
            </MenuWrapper>
            
            <Table>
                <TableHeader>Foto</TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Cargo</TableHeader>
                <TableHeader>Data de Admissão</TableHeader>
                <TableHeader>Telefone</TableHeader>

                {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>
                            <EmployeeImage src={employee.image} alt={employee.name} />
                        </TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.job}</TableCell>
                        <TableCell>{employee.admission_date}</TableCell>
                        <TableCell>{employee.phone}</TableCell>
                    </TableRow>
                ))}
            </Table>
        </Container>
    );
}

export default Employees;