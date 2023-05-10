import styled from 'styled-components';
import { mediaMob } from 'utils/FuncHelpers';

//Форма добавления нового продукта в конфиге
export const Form = styled.form`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    border-radius: 10px;

    @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    }
`
//кнопка крестик при добавлении изображения
export const Button = styled.button`
    width: 30px;
    margin-top: 40px;
    margin-left: 190px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-self: right;
    align-items: flex-start;
    position: absolute;
    background: red;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    color: white;
    left: 0;
    top:0;
    z-index: 10;

    &:active{
        width: 28px;
        height: 28px;
        margin: 11px;
    }

    &:hover{
        background-color: rgba(255, 0, 0, 0.7);
    }

    @media(min-width: 375px) {
    margin-top: 40px;
    margin-left: 245px;
    };
    @media(min-width: 425px) {
    margin-left: 295px;
    };
    @media(min-width: 768px) {
    margin-left: 180px;
    };
    @media(min-width: 1024px) {
    margin-top: 37px;
    margin-left: 173px;
    }
`

//блок c изображением и назв категории
export const FormHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
    width: 50%;
    height: 100%;
    padding: 5px;
    };
    @media(min-width: 1024px) {
        width: 30%;
    }
`

//блок с формой инпут изображения
export const CategoryImageInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 240px;
    position: relative;

    @media(min-width: 768px) {
        height: 220px;
    }
`

export const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

//обертка зона ввода текста названия категории
export const CategoryInputs = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

//зона ввода текста названия категории
export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid gray;
    ${mediaMob('margin', '5px')};
    width: 92%;
    min-height: 10px;
    max-height: 100px;
    padding: 5px;

    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 10px;
    }
`

//блок с формами ввода текста описания
export const FormFooter = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
    padding: 10px;
    }
`

export const Select = styled.select`
    width: 100%;
`
//зона ввода текста описания
export const Textarea = styled.textarea`
    align-self: center;
    border-radius: 5px;
    ${mediaMob('margin', '5px')};
    width: 92%;
    min-height: 10px;
    max-height: 100px;
    padding: 5px;

    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`