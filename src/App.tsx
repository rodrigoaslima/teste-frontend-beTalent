import Header from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Employees from "./components/Employees";
import useScreenSize from "./hooks/useScreenSize";
import EmployessMobile from "./components/EmployessMobile";
import useEmployeeStore from "./stores/useEmployeeStore";
import { useEffect } from "react";

function App() {
  const { loading, error, fetchEmployees,filteredEmployees } = useEmployeeStore();
  const {isMobile} = useScreenSize();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      {isMobile ? 
      <EmployessMobile 
        error={error} 
        filteredEmployees={filteredEmployees}
        loading={loading}
      /> 
      : 
      <Employees 
        error={error} 
        filteredEmployees={filteredEmployees}
        loading={loading}
      />}
    </ThemeProvider>  
  )
}

export default App
