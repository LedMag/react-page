import React from 'react'
import CollectionForm from './CollectionCard/CollectionForm';
import CollectionDetails from './CollectionDetails/CollectionDetails';
import { ConfigCollectionsContainer } from './ConfigCollectionsStyle';

type Image = {[key: string]: {files?: File[]}}; 

// export type IProduct = {form: IProductForm, files?: File[]};

const ConfigCollections = (/* {isAllowed}: {isAllowed: boolean} */): JSX.Element => {
    

    return (
        <ConfigCollectionsContainer>
            <CollectionDetails></CollectionDetails>
            <CollectionForm></CollectionForm>
        </ConfigCollectionsContainer>
    )
}

export default ConfigCollections;