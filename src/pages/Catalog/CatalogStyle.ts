import styled from 'styled-components';

export const CatalogBox = styled.div`
    @media(min-width: 320px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media(min-width: 425px) {}

    @media(min-width: 768px) {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 1024px) {}
`

export const ProductBox = styled.div`
    @media(min-width: 320px) {
        width: 150px;
        height: 150px;
    }

    @media(min-width: 425px) {
        width: 200px;
        height: 200px;
    }

    @media(min-width: 670px) {
        width: 200px;
        height: 200px;
    }

    @media(min-width: 768px) {
        width: 180px;
        height: 180px;
    }

    @media(min-width: 926px) {
        width: 200px;
        height: 200px;
    }

    @media(min-width: 1024px) {
        width: 250px;
        height: 250px;
    }
`

export const Content = styled.div`
    @media(min-width: 320px) {
        width: calc(150px * 2 + 20px);
        min-height: 20px;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-content: start;
    }

    @media(min-width: 425px) {
        width: calc(200px * 2 + 25px);
        padding: 12.5px;
    }

    @media(min-width: 670px) {
        width: calc(200px * 3 + 20px);
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 768px) {
        width: calc(180px * 4 + 20px);
        grid-template-columns: repeat(4, 1fr);
    }

    @media(min-width: 926px) {
        width: calc(200px * 4 + 20px);
        grid-template-columns: repeat(4, 1fr);
    }

    @media(min-width: 1024px) {
        width: calc(250px * 4 + 20px);
        grid-template-columns: repeat(4, 1fr);
    }
`