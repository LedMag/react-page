import React from 'react'
import ConfigCategories from './Categories/ConfigCategories';
import ConfigCollections from './Collections/ConfigCollections';
import {
    ConfigurationsContainer,
    ConfigSlide
} from './ConfigurationsStyle';


type Image = {[key: string]: {files?: File[]}}; 

// export type IProduct = {form: IProductForm, files?: File[]};

const Configurations = ({isAllowed}: {isAllowed: boolean}): JSX.Element => {
    

    return (
        <ConfigurationsContainer>
            <ConfigCategories></ConfigCategories>
            <ConfigCollections></ConfigCollections>
            <ConfigSlide>ConfigSlide</ConfigSlide>
        </ConfigurationsContainer>
    )
}

export default Configurations;
