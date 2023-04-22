import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 30px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 24px;
    &:hover,
    &:focus {
        color: #70B3F1;
    }
    &:nth-of-type(2) {
        margin-bottom: 25px;
    }
`;

export const Input = styled.input`
    display: block;
    margin: 0;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 16px;
`;

export const SubmitBtn = styled.button`
width: 150px;
appearance: none;
border: 0;
border-radius: 8px;
background: #4676D7;
color: #fff;
padding: 8px 16px;
font-size: 14px;
text-transform: capitalize;
:hover,
:focus {
    background: #1d49aa;
    outline: none;
    box-shadow: 0 0 0 2px #051BB8;
}
`;
