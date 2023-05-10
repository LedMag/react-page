import styled from 'styled-components';

export const Form = styled.form`
    width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;

    @media(min-width: 320px) {
        
    }

    @media(min-width: 425px) {}

    @media(min-width: 768px) {}

    @media(min-width: 1024px) {}
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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const FormFooter = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const ProductImageInput = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 300px;
    position: relative;
    margin-bottom: 10px;
`

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const ProductInputs = styled.div`
    width: 100%;
    height: auto;
`

export const Input = styled.input`
    width: 100%;
    z-index: 9;
`

export const Select = styled.select`
    width: 100%;
`

export const Textarea = styled.textarea`
    max-width: 280px;
    min-width: 280px;
    min-height: 75px;
    max-height: 75px;
    padding: 5px;
`