import styled from "styled-components";
import { mediaMob } from "utils/FuncHelpers";

export const CollectionDetailsContainer = styled.div`
    background: white;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CollectionDetailsBox = styled.div`
    ${mediaMob('height','75px')};
    background: white;
    width: 100%;
    border-radius: 15px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
`

export const CollectionDetailsIMG = styled.img`
    height: 100%;
    ${mediaMob('width','100px')};
    background: white;
    border-radius: 15px;
`

export const CollectionDetailsItem = styled.div`
    height: 100%;
    background: white;
    width: 75%;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
`

export const CollectionDetailsInfo = styled.div`
    height: 100%;
    width: 75%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px){
        width: 85%;
    };
    @media(min-width: 1024px){
        width: 90%;
    }
`

export const CollectionDetailsName = styled.span`
    height: 30%;
    width: 100%;
    background: blue;
    border-radius: 10px;
`
export const CollectionDetailsDesc = styled.p`
    height: 70%;
    width: 100%;
    background: red;
    border-radius: 10px;
`
export const CollectionDetailsButtons = styled.div`
    height: 100%;
    width: 20%;
    background: gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media(min-width: 768px){
        width: 12%;
    };
    @media(min-width: 1024px){
        width: 8%;
    }
`
export const CollectionDetailsEdit = styled.button`
    height: 50%;
    ${mediaMob('font-size','10px')};
    background: lightblue;
`
export const CollectionDetailsDelete = styled.button`
    height: 50%;
    ${mediaMob('font-size','9px')};
    background: darkred;
`