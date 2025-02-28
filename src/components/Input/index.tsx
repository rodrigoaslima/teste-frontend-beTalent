import useEmployeeStore from "../../stores/useEmployeeStore";
import { InputContainer, SearchIcon, StyledInput } from "./styles";


const Input = () => {

    const {searchEmployee, setSeachEmployee} = useEmployeeStore();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setSeachEmployee(event.target.value);
    }
    
  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={searchEmployee}
        placeholder="Pesquisar" 
        onChange={handleChange} 
      />
      <SearchIcon />
    </InputContainer> 
  );
};  
export default Input;