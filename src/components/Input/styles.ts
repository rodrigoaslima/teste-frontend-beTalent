import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Ícone de lupa

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray10};
    border-radius: 8px;
    padding: 0.75rem 1rem; 
    width: 100%;
    width: 287px;
`;

export const StyledInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray20};
    }
`;

export const SearchIcon = styled(FaSearch)`
    color: ${({ theme }) => theme.colors.gray20};
    margin-left: 0.5rem; 
`;