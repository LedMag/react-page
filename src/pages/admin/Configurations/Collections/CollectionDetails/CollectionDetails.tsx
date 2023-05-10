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

const CollectionDetails = ()=>{

    return(
        <CollectionDetailsContainer>
            <CollectionDetailsBox>
                <CollectionDetailsIMG></CollectionDetailsIMG>
                <CollectionDetailsItem>
                    <CollectionDetailsInfo>
                        <CollectionDetailsName></CollectionDetailsName>
                        <CollectionDetailsDesc></CollectionDetailsDesc>
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