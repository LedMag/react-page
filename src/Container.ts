import styled from "styled-components";


export const Container = styled.div`
  width: calc(100vw - 20px);
  max-width: 1024px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 6px -2px rgb(0 0 0);
  margin: 10px;
  padding: 0;

  @media(min-width: 320px) {
    width: calc(100vw - 20px);
  }

  @media(min-width: 768px) {
    width: calc(100vw - 40px);
  }
`
