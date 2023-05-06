import styled from 'styled-components';
import { mediaAll, mediaMob } from 'utils/FuncHelpers';

export const CatalogBox = styled.div`
    @media(min-width: 320px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const ProductBox = styled.div`
    padding: 5px;
    ${mediaMob('width', '150px')};
    ${mediaMob('height', '150px')};

    @media(min-width: 768px) {
        width: 230px;
        height: 230px;
    }
`

export const Content = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: start;
    justify-items: center;

    @media(min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media(min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`