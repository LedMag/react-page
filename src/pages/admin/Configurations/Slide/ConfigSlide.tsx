import React from "react";
import { ConfigSlideContainer, SlideList } from "./ConfigSlideStyle";
import SlideForm from "./SlideCard/SlideForm";
import SlideDetails from "./SlideDetails/SlideDetails";

const ConfigSlide = ()=>{
    return(
        <ConfigSlideContainer>
            <SlideList open={true}>
                <SlideDetails></SlideDetails>
                <SlideForm></SlideForm>
            </SlideList>
        </ConfigSlideContainer>
    );
}

export default ConfigSlide;