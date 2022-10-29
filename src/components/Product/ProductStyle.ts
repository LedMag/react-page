import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';

/* export const HeaderStyled = styled.header`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
    "A B"
    "A C"
    "D D";
` */

export const ProductBtns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    padding: 5px;
    z-index: 9;
  `  
export const ProductImage = styled.img`
    opacity: 1;
    height: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
    object-fit: cover;
  `

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(176, 176, 176, 0.7);
    padding: 5px;
    color: white;
  `

export const ProductName = styled.div`
`
  
export const ProductHover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
  export const NavLink = styled(BaseNavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 250px;
    height: 250px;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      ${ProductHover} {
        opacity: 1;
      }
      ${ProductImage} {
        opacity: 0.3;
      }
    }
  `