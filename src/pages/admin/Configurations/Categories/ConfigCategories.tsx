import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CategoryForm from './CategoryCard/CategoryForm';
import CategoryDetails from './CategoryDetails/CategoryDetails';
import { ConfigCategoriesContainer, CategoriesList } from './ConfigCategoriesStyle';

type Image = {[key: string]: {files?: File[]}}; 

type Category = {
    img_url: string,
    name: string,
    id: number,
    [key: string]: any
};

const ConfigCategories = ({categoryForm, handlerChange, save }: {categoryForm: any, handlerChange: any, save: any}/* {isAllowed}: {isAllowed: boolean} */): JSX.Element => {

    const [open, setOpen] = useState(false);
    const handlerClick = () => {
        setOpen(!open)
    }
    const {categories, lang} = useSelector((store: any)=>{
        return {
            categories: store.setData.categories.data,
            lang: (store.lang as string).split("-")[0]
        }
    })

    const renderCategories = (categories: Category[] ): Array<JSX.Element> | undefined => {
        console.log(categories);
        
        if(!categories?.length) return;
        return categories.map( (category: Category)=> {
            const desc: string = `description_${lang}`;
            return (<CategoryDetails key={category.id} src={category.img_url} name={category.name} desc={category[desc]}></CategoryDetails>)
        } )
    }

    return (
        <ConfigCategoriesContainer onClick={handlerClick}>
            <CategoriesList open={open}>
                {renderCategories(categories)}
                <CategoryForm form={categoryForm} handlerChange={handlerChange}
                save={save}></CategoryForm>
            </CategoriesList>
        </ConfigCategoriesContainer>
    )
}

export default ConfigCategories;