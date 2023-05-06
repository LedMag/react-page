import styled from 'styled-components';
import { mediaMob } from 'utils/FuncHelpers';

export const Form = styled.form`
    width: 250px;
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const Input = styled.input`
    margin-bottom: 10px;
`

export const Label = styled.label`
    
`

export const Button = styled.button`
    cursor: pointer;
    background-color: light-grey;


    ${mediaMob('font-size', '20px')};

    @media(min-width: 320px) {
        padding: 10px;
        /* font-size: 20px; */
        border-radius: 5px;
    }

    &:active{
        transform: scale(0.97);
    }

    &:hover{
        background-color: grey;
    }
`