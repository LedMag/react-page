import React from "react";
import InputImages from "components/InputFiles/Images/InputImages";
import { SlideFormContainer } from "./SlideFormStyle";

const SlideForm = ()=>{
    
    const edit = true;
    const getFile = (arg: any)=>{
        console.log(arg);
    };
    const deleteFile = (arg: any)=>{
        console.log(arg);
    };
    const url = "";
    
    return(
        <SlideFormContainer onClick={console.log}>
            <InputImages edit={edit} getFile={getFile} deleteFile={deleteFile} url={url}></InputImages>
        </SlideFormContainer>
    )
}

export default SlideForm;