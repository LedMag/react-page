import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const Button = styled.button`
    width: 150px;
    height: 50px;
    cursor: pointer;
    font-size: 20px;
    background-color: light-grey;
    border-radius: 5px;
    
    &:active{
        width: 148px;
        height: 48px;
        margin: 1px;
    }

    &:hover{
        background-color: grey;
    }
`

export const ProductsWrapper = styled.div`
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    flex-wrapper: wrap;
    justify-content: start;
`