import React from "react";
import { SlideDetailsContainer,
    SlideDetailsIMG,
    SlideDetailsButtons,
    SlideDetailsEdit,
    SlideDetailsDelete,
    SlideBox
} from "./SlideDetailsStyle";

const SlideDetails = ()=>{

    return(
        <SlideDetailsContainer>
            <SlideBox>
                <SlideDetailsIMG></SlideDetailsIMG>
                <SlideDetailsButtons>
                    <SlideDetailsEdit>Edit</SlideDetailsEdit>
                    <SlideDetailsDelete>Delete</SlideDetailsDelete>
                </SlideDetailsButtons>
            </SlideBox>
            
        </SlideDetailsContainer>
    )
}

export default SlideDetails;