import styled from 'styled-components';

export const ProductBox = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  ` 

export const ProductBtns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    padding: 5px;
  `  
export const ProductImage = styled.img`
    opacity: 1;
    height: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
    object-fit: cover;
  `

export const ProductInfo = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
