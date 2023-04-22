import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DeleteBtn = styled.button`
    border-radius: 8px;
    font-size: 14px;
    padding: 5px 15px;
    &:hover {
        background-color: #1d49aa;
        color: #fff;
    }
`;
