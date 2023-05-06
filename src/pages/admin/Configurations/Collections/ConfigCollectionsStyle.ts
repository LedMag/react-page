import styled from "styled-components";
import { colors } from "theme/colors";
import { mediaMob } from "utils/FuncHelpers";


export const ConfigCollectionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${mediaMob('height', '50px')};
    ${mediaMob('margin-bottom', '10px')};
    ${mediaMob('border-radius', '15px')};
    background-color: ${colors.blue};
`