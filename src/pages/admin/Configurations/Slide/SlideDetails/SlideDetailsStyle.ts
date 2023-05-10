import styled from "styled-components";
import { colors } from "theme/colors";
import { mediaMob } from "utils/FuncHelpers";

export const SlideDetailsContainer = styled.div`
    background: white;
    width: 100%;
    ${mediaMob('margin-bottom','10px')};
    border-radius: 15px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
`

export const SlideBox = styled.div`
    ${mediaMob('height','120px')};
    ${mediaMob('width','120px')};
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
    background: ${colors.blue};
`

export const SlideDetailsIMG = styled.img`
    height: 70%;
    width: 100%;
    background: white;
    border-radius: 10px;
`

export const SlideDetailsButtons = styled.div`
    height: 26%;
    width: 100%;
    background: gray;
    border-radius: 15px;
    display: flex;
    overflow: hidden;
`
export const SlideDetailsEdit = styled.button`
    height: 100%;
    width: 50%;
    background: lightblue;
    ${mediaMob('font-size','12px')};
`
export const SlideDetailsDelete = styled.button`
    height: 100%;
    width: 50%;
    ${mediaMob('font-size','12px')};
    background: darkred;
`
