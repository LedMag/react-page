import React from "react";
import { CollectionDetailsContainer,
    CollectionDetailsIMG,
    CollectionDetailsName,
    CollectionDetailsDesc,
    CollectionDetailsButtons,
    CollectionDetailsEdit,
    CollectionDetailsDelete,
    CollectionDetailsInfo,
    CollectionDetailsBox,
    CollectionDetailsItem
} from "./CollectionDetailsStyle";

type Collection = {
    src: string,
    name: string,
    desc: string
}

const CollectionDetails = ({src, name, desc}: Collection)=>{

    return(
        <CollectionDetailsContainer>
            <CollectionDetailsBox>
                <CollectionDetailsIMG src={src}></CollectionDetailsIMG>
                <CollectionDetailsItem>
                    <CollectionDetailsInfo>
                        <CollectionDetailsName>{name}</CollectionDetailsName>
                        <CollectionDetailsDesc>{desc}</CollectionDetailsDesc>
                    </CollectionDetailsInfo>
                    <CollectionDetailsButtons>
                        <CollectionDetailsEdit>Edit</CollectionDetailsEdit>
                        <CollectionDetailsDelete>Delete</CollectionDetailsDelete>
                    </CollectionDetailsButtons>
                </CollectionDetailsItem>
            </CollectionDetailsBox>
        </CollectionDetailsContainer>
    )
}

export default CollectionDetails;