import styled from 'styled-components';
import { colors } from 'theme/colors';

type Open = {open: boolean};

export const FilterBox = styled.form<Open>`
    padding: 5px;
    
    @media(min-width: 320px) {
        position: absolute;
        display: ${ ({open}) => open ? 'flex' : 'none'};
        flex-direction: column;
        width: 200px;
        top: 0;
        left: 0;
        background-color: ${colors.blue};
        z-index: 999;
    }

    @media(min-width: 768px) {
        position: unset;
        width: 100%;
        display: flex;
        background-color: ${colors.blue};
    }
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
    margin-bottom: 5px;
    padding: 5px;
`
export const SelectCategory = styled.select`
    width: 100%;
    margin-bottom: 5px;
    padding: 5px;
`

export const SelectCollection = styled.select`
    width: 100%;
    margin-bottom: 5px;
    padding: 5px;
`

export const InputMin = styled.input`
    width: 100%;
    margin-bottom: 5px;
    padding: 5px;
`

export const InputMax = styled.input`
    width: 100%;
    margin-bottom: 5px;
    padding: 5px;
`