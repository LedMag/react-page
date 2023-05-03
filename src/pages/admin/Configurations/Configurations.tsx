import React from 'react'
import {
    ConfigurationsContainer
} from './ConfigurationsStyle';


type Image = {[key: string]: {files?: File[]}}; 

// export type IProduct = {form: IProductForm, files?: File[]};

const Configurations = ({isAllowed}: {isAllowed: boolean}): JSX.Element => {
    

    return (
        <ConfigurationsContainer>
            <div></div>
            <div></div>
            <div></div>
        </ConfigurationsContainer>
    )
}

export default Configurations;
