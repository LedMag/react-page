import styled from "styled-components";
import { colors } from "theme/colors";
import { mediaMob } from "utils/FuncHelpers";

type Range = {
    length: {
        left: number,
        right: number
    }
}

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
    padding: 8px;
    width: 15%;
    border: none;
    ${mediaMob('border-radius', '5px')};
`
            
export const InputMax = styled.input`
    padding: 8px;
    width: 15%;
    border: none;
    ${mediaMob('border-radius', '5px')};
`

export const RangeBox = styled.div`
    position: relative;
    height: 10px;
    width: 70%;
`

export const Line = styled.div`
    position: absolute;
    width: 100%;
    height: 2px;
    top: 4px;
    background-color: white;
`

export const Range = styled.div<Range>`
    height: 100%;
    left: ${({length}) => length.left + "%"};
    right: ${({length}) => length.right + "%"};
    position: absolute;
    border-radius: 5px;
    background: #17A2B8;
`

export const RangeInputMin = styled.input`
    padding-left: 0;
    padding-right: 0;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    position: absolute;
    width: 100%;
    height: 5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    &::-webkit-slider-thumb{
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: #17A2B8;       
        pointer-events: auto;
        -webkit-appearance: none;
        box-shadow: 0 0 6px rgba(0,0,0,0.05);
        cursor: pointer;

        &:hover {
            background-color: ${colors.blue};
        }

    }
    &::-moz-range-thumb{
        height: 17px;
        width: 17px;
        border: none;
        border-radius: 50%;
        background: #17A2B8;
        pointer-events: auto;
        -moz-appearance: none;
        box-shadow: 0 0 6px rgba(0,0,0,0.05);
    }
`

export const RangeInputMax = styled.input`
    padding-left: 0;
    padding-right: 0;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    position: absolute;
    width: 100%;
    height: 5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-webkit-slider-thumb{
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: #17A2B8;       
        pointer-events: auto;
        -webkit-appearance: none;
        box-shadow: 0 0 6px rgba(0,0,0,0.05);  
    }
    &::-moz-range-thumb{
        height: 17px;
        width: 17px;
        border: none;
        border-radius: 50%;
        background: #17A2B8;
        pointer-events: auto;
        -moz-appearance: none;
        box-shadow: 0 0 6px rgba(0,0,0,0.05);
    }
`
