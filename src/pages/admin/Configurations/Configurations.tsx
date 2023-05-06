import React from 'react'
import {
    ConfigurationsContainer,
    ConfigCollection,
    ConfigCategory,
    ConfigSlide
} from './ConfigurationsStyle';


type Image = {[key: string]: {files?: File[]}}; 

// export type IProduct = {form: IProductForm, files?: File[]};

const Configurations = ({isAllowed}: {isAllowed: boolean}): JSX.Element => {
    

    return (
        <ConfigurationsContainer>
            <ConfigCollection className='config'>ConfigCollection</ConfigCollection>
            <ConfigCategory>ConfigCategory</ConfigCategory>
            <ConfigSlide>ConfigSlide</ConfigSlide>
        </ConfigurationsContainer>
    )
}

export default Configurations;
