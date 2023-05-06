import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';


//карточка с продуктом
export const NavLink = styled(BaseNavLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  color: black;
`

//изображение карточки
export const ProductImage = styled.img`
  position: absolute;
  top: 0px;
  opacity: 1;
  height: 70%;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;
`

//блок с описанием и кнопками
export const ProductHover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .5s ease;
  width: 100%;
  height: 30%;
  z-index: 10;
`

//блок с описанием и ценой
export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  height: 50%;
  width: 100%;
`

//имя продукта
export const ProductName = styled.span`
  height: 100%;
  width: 60%;
`
//цена продукта
export const ProductPrice = styled.span`
  height: 100%;
  width: 40%;
  font-size: 18px;
  text-align: right;
`

//блок кнопок карточки
export const ProductBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  z-index: 9;
  height: 50%;
` 

//кнопка добавить
export const Add = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: gray;
  font-size: 18px;

  &:hover {
    background-color: darkgray;
  }
`
//кнопка удалить
export const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  font-size: 18px;
  color: red;
  background-color: gray;

  &:hover{
    background-color: darkgray;
  }

  &:active {
    transform: scale(0.95);
  }
`

export const Cancel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: gray;
    font-size: 18px;

    &:hover {
      background-color: darkgray;
    }
  `