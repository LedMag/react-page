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

type Category = {
    src: string,
    name: string,
    desc: string
}

const CategoryDetails = ({src, name, desc}: Category) => {

    return(
        <CategoryDetailsContainer>
            <CategoryDetailsBox>
                <CategoryDetailsIMG src={src}></CategoryDetailsIMG>
                <CategoryDetailsItem>
                    <CategoryDetailsInfo>
                        <CategoryDetailsName>{name}</CategoryDetailsName>
                        <CategoryDetailsDesc>{desc}</CategoryDetailsDesc>
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