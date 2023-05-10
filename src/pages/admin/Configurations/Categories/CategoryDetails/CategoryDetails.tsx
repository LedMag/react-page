import React from "react";
import { CategoryDetailsContainer,
    CategoryDetailsIMG,
    CategoryDetailsName,
    CategoryDetailsDesc,
    CategoryDetailsButtons,
    CategoryDetailsEdit,
    CategoryDetailsDelete,
    CategoryDetailsInfo,
    CategoryDetailsBox,
    CategoryDetailsItem
} from "./CategoryDetailsStyle";

const CategoryDetails = ()=>{

    return(
        <CategoryDetailsContainer>
            <CategoryDetailsBox>
                <CategoryDetailsIMG></CategoryDetailsIMG>
                <CategoryDetailsItem>
                    <CategoryDetailsInfo>
                        <CategoryDetailsName></CategoryDetailsName>
                        <CategoryDetailsDesc></CategoryDetailsDesc>
                    </CategoryDetailsInfo>
                    <CategoryDetailsButtons>
                        <CategoryDetailsEdit>Edit</CategoryDetailsEdit>
                        <CategoryDetailsDelete>Delete</CategoryDetailsDelete>
                    </CategoryDetailsButtons>
                </CategoryDetailsItem>
            </CategoryDetailsBox>
        </CategoryDetailsContainer>
    )
}

export default CategoryDetails;