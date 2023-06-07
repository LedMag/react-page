import React, { Dispatch } from 'react'
import ConfigCategories from './Categories/ConfigCategories';
import ConfigCollections from './Collections/ConfigCollections';
import ConfigSlide from './Slide/ConfigSlide';
import {
    ConfigurationsContainer
} from './ConfigurationsStyle';
import { useDispatch, useSelector } from 'react-redux';
import { postCategoryForm, postCollectionForm, setCategoryForm, setCollectionForm } from 'redux/actions/actionCreator';


type Image = {[key: string]: {files?: File[]}}; 

// function myFunc<T>(param: string): T {
//     return Number.parseInt(param) as T;
// }

// myFunc<number>("22");

// export type IProduct = {form: IProductForm, files?: File[]};

const Configurations = ({isAllowed}: {isAllowed: boolean}): JSX.Element => {

    const dispatch = useDispatch();

    const { categoryForm, collectionForm } = useSelector( (store: any) => ({
        categoryForm: store.categoryForm,
        collectionForm: store.collectionForm
    }))

    const categoryHandlerChange = (newState: any) => {
        dispatch(setCategoryForm(newState))
    }

    const collectionHandlerChange = (newState: any) => {
        dispatch(setCollectionForm(newState))
    }

    const saveCategoryForm = () => {
        dispatch(postCategoryForm(categoryForm))
    }

	const saveCollectionForm = () => {
		dispatch(postCollectionForm(collectionForm))
	}


    return (
        <ConfigurationsContainer>
            <ConfigCategories categoryForm={categoryForm} handlerChange={categoryHandlerChange}
            save={saveCategoryForm}></ConfigCategories>
            <ConfigCollections collectionForm={collectionForm} handlerChange={collectionHandlerChange} saveCollection={saveCollectionForm}></ConfigCollections>
            <ConfigSlide></ConfigSlide>
        </ConfigurationsContainer>
    )
}

export default Configurations;
