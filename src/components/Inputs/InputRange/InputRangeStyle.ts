import { mediaMob } from "pages/admin/Configurations/ConfigurationsStyle";
import styled from "styled-components";
import { colors } from "theme/colors";

export const InputRangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${mediaMob('height', '28px')};
    ${mediaMob('margin-bottom', '5px')};
    ${mediaMob('padding-left', '5px')};
    ${mediaMob('padding-right', '5px')};
    border: 1px solid #595959;
    ${mediaMob('border-radius', '5px')};
    ${mediaMob('font-size', '13px')};
    color: grey;
`

export const InputMin = styled.input`
    width: 20%;
    border: none;
    ${mediaMob('border-radius', '5px 0 0 5px')};
`
            
export const InputMax = styled.input`
    width: 20%;
    border: none;
    ${mediaMob('border-radius', '0 5px 5px 0')};
`

export const RangeBox = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mediaMob('padding', '5px')};
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;
`

export const RangeButton = styled.button`
    height: 20px;
    width: 26px;
    border-radius: 50%;
    border: 2px ${colors.darkBlue} solid;
    cursor: pointer;

    &:hover {
        background-color: ${colors.blue};
    }
`
