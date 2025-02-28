import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.4rem;
`;

export const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Table = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    overflow: hidden;
    margin-top: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray00};
`;

export const TableHeader = styled.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 80px 1fr 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem 1rem;
    border-radius: 8px 8px 0 0;
`;

export const TableRow = styled.div`
    display: contents;
`;

export const TableCell = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray00};

    &:first-child {
        justify-content: center;
    }

    &:last-child {
        justify-content: center; 
    }
`;

export const EmployeeImage = styled.img`
    width: 35px;
    height: 34px;
    border-radius: 50%; 
    object-fit: cover;
`;

export const ExpandableRow = styled.div`
    grid-column: 1 / -1;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray00};
`;

export const ArrowIcon = styled(FaChevronDown)<{ expanded: boolean }>`
    cursor: pointer;
    transition: transform 0.2s;
    transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
