import styled from 'styled-components';
import { colors } from 'theme/colors';

export const FooterStyled = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media(min-width: 320px) {}

    @media(min-width: 425px) {}

    @media(min-width: 768px) {}

    @media(min-width: 1024px) {}
`

export const Bar = styled.div`
@media(min-width: 320px) {     
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
    border-top: 1px solid ${colors.blue};
    border-bottom: 1px solid ${colors.blue};
}
`

export const Inner = styled.div`
    @media(min-width: 320px) {
        position: relative;
        height: 26px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10px;
        background-color: ${colors.blue};
    }

`

export const Bottom = styled.div`
    @media(min-width: 320px) {
        height: 50px;
    }

`