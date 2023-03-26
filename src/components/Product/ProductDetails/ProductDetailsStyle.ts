import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const ProductBox = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  @media(min-width: 320px) {
    // height: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media(min-width: 425px) {}

  @media(min-width: 768px) {}

  @media(min-width: 1024px) {
    // width: 100%;
    // height: 500px;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
  }
`

export const ProductImageView = styled.img`
  width: 280px;
  height: 250px;
  // padding: 15px;
  // transition: .5s ease;
  // backface-visibility: hidden;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 25%;
  height: 100%;
  border: 2px solid black;
  border-radius: 5px;
  margin: 2px;
  opacity: 0.5;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`

export const ProductImages = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ProductImage} {

    &.active {
        opacity: 1;
      }
  }
`

export const ProductInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // background-color: rgba(176, 176, 176, 0.7);
  padding: 5px;
  color: black;
`

export const ProductName = styled.div`
`

export const Buttons = styled.div`
  display: flex;
  @media(min-width: 320px) {
    width: 100%;
    // height: 500px;
    justify-content: space-between;
    align-items: center;
  }

  @media(min-width: 425px) {}

  @media(min-width: 768px) {}

  @media(min-width: 1024px) {}
`

export const Delete = styled.button`
    padding: 5px;
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

  export const Editar = styled(BaseNavLink)`
    // dsiplay: block;
    padding: 5px;
    background-color: green;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    z-index: 99;

    &:hover{
      background-color: dark-green;
    }

    &:active {
      transform: scale(0.95);
    }
  `
