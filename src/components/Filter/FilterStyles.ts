import styled from 'styled-components';
import { colors } from 'theme/colors';
import { mediaMob } from 'utils/FuncHelpers';
import { styleFilter } from './styleHelpers';


type Open = {open: boolean};

export const FilterBox = styled.form<Open>`
    ${ ({open}) => styleFilter(open, colors)};

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 670px) {
        grid-template-columns: 1fr 1fr 1fr;
    };
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    };
    ${mediaMob('grid-gap', '5px')};
    justify-content: space-around;
    align-content: center;
    align-items: center;
    justify-items: start;



    /* padding: 5px;
    
    @media(min-width: 320px) {
        position: absolute;
        display: ${ ({open}) => open ? 'flex' : 'none'};
        flex-direction: column;
        width: 200px;
        top: 0;
        left: 0;
        background-color: ${colors.blue};
        z-index: 9;
    }

    @media(min-width: 768px) {
        position: unset;
        width: 100%;
        display: flex;
        background-color: ${colors.blue};
    } */
`

// export const FilterBox = styled.form`
//     width: 100%;
//     max-width: 230px;
//     padding: 10px;
//     display: block;

//     @media(min-width: 320px) {
//         position: absolute;
//         left: 0;
//     }

//     @media(min-width: 425px) {}

//     @media(min-width: 670px) {}

//     @media(min-width: 768px) {}

//     @media(min-width: 1024px) {}
// `

export const InputName = styled.input`
    width: 100%;
    ${mediaMob('height', '28px')};
    ${mediaMob('margin-bottom', '5px')};
    ${mediaMob('padding', '5px')};
    border: 1px solid #595959;
    ${mediaMob('border-radius', '5px')};
    ${mediaMob('font-size', '13px')};
    color: grey;
`


export const SelectCategory = styled.select`
    width: 100%;
    ${mediaMob('height', '28px')};
    ${mediaMob('margin-bottom', '5px')};
    ${mediaMob('padding', '5px')};
    border: 1px solid #595959;
    ${mediaMob('border-radius', '5px')};
    ${mediaMob('font-size', '13px')};
    color: grey;
`

export const SelectCollection = styled.select`
    width: 100%;
    ${mediaMob('height', '28px')};
    ${mediaMob('margin-bottom', '5px')};
    ${mediaMob('padding', '5px')};
    border: 1px solid #595959;
    ${mediaMob('border-radius', '5px')};
    ${mediaMob('font-size', '13px')};
    color: grey;
`

export const InputMin = styled.input`
    width: 100%;
    ${mediaMob('height', '28px')};
    ${mediaMob('margin-bottom', '5px')};
    ${mediaMob('padding', '5px')};
    border: 1px solid #595959;
    ${mediaMob('border-radius', '5px')};
    ${mediaMob('font-size', '13px')};
    color: grey;
`

export const InputMax = styled.input`
    width: 100%;
    ${mediaMob('height', '28px')};
    ${mediaMob('margin-bottom', '5px')};
    ${mediaMob('padding', '5px')};
    border: 1px solid #595959;
    ${mediaMob('border-radius', '5px')};
    ${mediaMob('font-size', '13px')};
    color: grey;
`