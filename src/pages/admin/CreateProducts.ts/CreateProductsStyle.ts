import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    background-color: light-grey;

    @media(min-width: 320px) {
        width: 280px;
        padding: 10px;
        margin: 5px;
        font-size: 20px;
        border-radius: 5px;
    }

    @media(min-width: 425px) {}

    @media(min-width: 768px) {}

    @media(min-width: 1024px) {}
    
    &:active{
        transform: scale(0.97);
    }

    &:hover{
        background-color: grey;
    }
`

export const ProductsWrapper = styled.div`
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    flex-wrapper: wrap;
    justify-content: center;
`