import styled from 'styled-components';

export const CatalogBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Content = styled.div`
    width: calc(250px * 3 + 20px);
    min-height: calc(250px * 4 + 20px);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: start;
`