import styled from '@emotion/styled';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
    transition: color 250ms;
    &:hover,
    &:focus {
        color: #70B3F1;
    }
`;

export const Input = styled.input`
    display: block;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 18px;
`;