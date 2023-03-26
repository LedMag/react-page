import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ProductBtns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    padding: 5px;
    z-index: 9;
  `  

export const Add = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: blue;
    font-size: 18px;

    &:hover {
      background-color: red;
    }
  `

export const Cancel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: green;
    font-size: 18px;

    &:hover {
      background-color: grey;
    }
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
    z-index: 9;
  `
  export const NavLink = styled(BaseNavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
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

  export const Delete = styled.button`
    padding: 5px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: pink;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    z-index: 99;

    &:hover{
      background-color: red;
    }

    &:active {
      transform: scale(0.95);
    }
  `
