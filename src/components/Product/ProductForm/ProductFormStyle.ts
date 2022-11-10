import styled from 'styled-components';

export const Form = styled.form`
    width: 320px;
    // max-height: 350px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const Button = styled.button`
    width: 30px;
    height: 30px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: red;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    color: white;
    left: 0;
    top:0;
    z-index: 10;

    &:active{
        width: 28px;
        height: 28px;
        margin: 11px;
    }

    &:hover{
        background-color: rgba(255, 0, 0, 0.7);
    }
`

export const FormHeader = styled.div`
    width: 300px;
    height: auto;
    display: flex;
`

export const FormFooter = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const ProductImageInput = styled.div`
    width: 120px;
    height: 120px;
    position: relative;

    input{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0;
    }
`

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const ProductInputs = styled.div`
    width: 180px;
    height: 120px;
`

export const Input = styled.input`
    width: 100%;
    z-index: 9;
`

export const Select = styled.select`
    width: 100%;
`

export const Textarea = styled.textarea`
    max-width: 300px;
    min-width: 300px;
    min-height: 75px;
    max-height: 75px;
    padding: 5px;
`