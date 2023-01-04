import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme/colors';

export const SliderContainer = styled.div`  
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
}
`

export const Next = styled.div`  
    position: absolute;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-size: 42px;
    line-height: 42px;
    z-index: 2;
    right: 10px;
    transition: all .3s;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    &:active {
        transform: scale(0.8);
    }
`

export const Prev = styled(Next)`  
    left: 10px;
    transform: scale(-1)
`

export const SlideImage = styled.img` 
    width: 100%;
    opacity: 1;
`

export const DotsContainer = styled.div`
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    margin: 3px;
    border-radius: 50%;
    border: 1px solid ${colors.blue};
    background-color: white;
    cursor: pointer;
`
  
