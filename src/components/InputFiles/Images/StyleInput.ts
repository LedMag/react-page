import styled from "styled-components";
import ReactDropdown from 'react-dropdown';

export const Section = styled.section`
  width: 50%;
  height: 50%;
`

export const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dotted black;
  border-radius: 20px;
  cursor: pointer;
  font-size: large; 

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  span {
    font-weight: lighter;
    font-size: small;
    padding-top: 0.5rem;
  }
`
export const Input = styled.input`
  display: none;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  p {
    padding: 0 0.5rem;
    margin: 0;
  }
`

export const Button = styled.button`
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  width: 100%;
  height: 2rem;
  color: white;
  background-color: rgba(255, 0, 0, 0.3);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`

export const Error = styled.p`
  text-align: center;

  span {
    color: red;
  }
`
