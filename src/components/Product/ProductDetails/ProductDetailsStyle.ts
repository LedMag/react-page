import styled from 'styled-components';

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  @media(min-width: 320px) {
    width: 300px;
    height: 500px;
  }

  @media(min-width: 425px) {}

  @media(min-width: 768px) {}

  @media(min-width: 1024px) {}
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
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;
`

export const ProductImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ProductImage} {
    width: 33.3%;
  }
`

export const ProductInfo = styled.div`
  width: 100%;
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
