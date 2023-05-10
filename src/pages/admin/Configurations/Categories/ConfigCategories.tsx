import React, { useState } from 'react'
import CategoryForm from './CategoryCard/CategoryForm';
import CategoryDetails from './CategoryDetails/CategoryDetails';
import { ConfigCategoriesContainer, CategoriesList } from './ConfigCategoriesStyle';

type Image = {[key: string]: {files?: File[]}}; 

// export type IProduct = {form: IProductForm, files?: File[]};

const ConfigCategories = (/* {isAllowed}: {isAllowed: boolean} */): JSX.Element => {

    const category = {name: "TestCategory", id: 1, description: "test description", img: "https://www.gravatar.com/avatar/01668da392219a679c8de84adafa15a3?s=64&d=identicon&r=PG"}

    const [open, setOpen] = useState(false);
    
    const handlerClick = () => {
        setOpen(!open)
    }

    return (
        <ConfigCategoriesContainer onClick={handlerClick}>
            <CategoriesList open={open}>
                <CategoryDetails></CategoryDetails>
                <CategoryForm form={category}></CategoryForm>
            </CategoriesList>
        </ConfigCategoriesContainer>
    )
}

export default ConfigCategories;