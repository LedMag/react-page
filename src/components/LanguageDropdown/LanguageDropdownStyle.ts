import styled from "styled-components";
import ReactDropdown from 'react-dropdown';
import { mediaMob } from "utils/FuncHelpers";
import { colors } from "theme/colors";

export const Dropdown = styled(ReactDropdown)`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: ${colors.blue};
    height: 30px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${mediaMob('border-radius','15%')};
    border: 2px solid gray;
`

export const Options = styled.select`
`