import styled from "styled-components";
import ReactDropdown from 'react-dropdown';
import { mediaMob } from "utils/FuncHelpers";
import { colors } from "theme/colors";

export const Dropdown = styled(ReactDropdown)`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: ${colors.blue};
    font-size: 20px;
    height: 35px;
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 50%;
    /* border-radius: 5px 5px 5px 5px; */
    border: 2px solid gray;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg); 
    -moz-transform: rotate(90deg);
    cursor: pointer;

    /* .Dropdown-root .is-open {
        border-radius: 5px 5px 0 0 !important;
        background-color: red !important;
        height: 120px;
    } */

    .Dropdown-placeholder {
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg); 
        -moz-transform: rotate(-90deg);
        padding: 0 0 4px 0;
    }

    .Dropdown-menu {
        padding-top: 2px;
    }

    .Dropdown-option:last-child{
        /* border-radius: 5px 0 0 5px; */
    }

    .Dropdown-option {
        border-radius: 50%;
        border: 1px solid gray;
        display: flex;
        height: 35px;
        width: 35px;
        padding: 0 0 4px 0;
        background-color: white;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg); 
        -moz-transform: rotate(-90deg);
        cursor: pointer;

        &:hover {
            background-color: lightblue;
        }
    }
`