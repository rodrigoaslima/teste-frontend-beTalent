import { useState } from "react";
import Input from "../Input";
import { Container, Title, ArrowIcon, EmployeeImage, ExpandableRow, Table, TableCell, TableHeader, TableRow } from "./styles";
import React from "react";

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployessMobileProps {
  loading: boolean;
  error: string;
  filteredEmployees: Employee[];
}


const EmployessMobile = ({loading, error, filteredEmployees}: EmployessMobileProps) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <Container>
      <Title>Funcionários</Title>
      <Input />
      
      <Table>
        <TableHeader>
          <div>FOTO</div>
          <div>NOME</div>
          <div></div>
        </TableHeader>

        {filteredEmployees.map((employee) => (
          <React.Fragment key={employee.id}>
            <TableRow>
              <TableCell>
                <EmployeeImage src={employee.image} alt={employee.name} />
              </TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>
                <ArrowIcon
                  expanded={expandedRows.includes(employee.id)}
                  onClick={() => toggleRow(employee.id)}
                />
              </TableCell>
            </TableRow>

            {expandedRows.includes(employee.id) && (
              <ExpandableRow>
                <div>
                  <strong>Cargo:</strong> {employee.job}
                </div>
                <div>
                  <strong>Data de Admissão:</strong> {employee.admission_date}
                </div>
                <div>
                  <strong>Telefone:</strong> {employee.phone}
                </div>
              </ExpandableRow>
            )}
          </React.Fragment>
        ))}
      </Table>
    </Container>
  );
};

export default EmployessMobile;