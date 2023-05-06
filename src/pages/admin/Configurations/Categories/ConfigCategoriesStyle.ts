import styled from "styled-components";
import { colors } from "theme/colors";
import { mediaMob } from "utils/FuncHelpers";

type Open = {
    open: boolean
}

export const ConfigCategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    /* ${mediaMob('height', '50px')}; */
    ${mediaMob('margin-bottom', '10px')};
    ${mediaMob('border-radius', '15px')}
    background-color: ${colors.blue};
`

export const CategoriesList = styled.div<Open>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({open}) => open ? '10px' : ""};
`