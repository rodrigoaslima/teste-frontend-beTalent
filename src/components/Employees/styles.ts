import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const MenuWrapper = styled.div`
    display: flex;
    padding: 1.4rem;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    flex: 6;
    font-size: ${({ theme }) => theme.fontSizes.h1};
    color: ${({ theme }) => theme.colors.black};
`;

export const Table = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 1fr 1fr 1fr;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    overflow: hidden;
    margin: 0 1.4rem;
    border: 1px solid ${({ theme }) => theme.colors.gray00};
    border-bottom: none;
`;

export const TableHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    text-align: left;

    &:first-child {
        padding-left: 1rem;
    }

    &:last-child {
        padding-right: 1rem;
    }
`;

export const TableRow = styled.div`
    display: contents; 
`;

export const TableCell = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.white}; 
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray00};

    &:first-child {
        padding-left: 1rem;
        justify-content: center;
    }

    &:last-child {
        padding-right: 1rem;
    }

`;

export const EmployeeImage = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%; 
    object-fit: cover;
`;
