import ProductForm from 'components/Product/ProductForm/ProductForm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductForm, setProductForm } from 'redux/actions/actionCreator';
import { GET_ALL_PRODUCTS, POST_PRODUCT } from 'redux/constans';
import {
    ProductsWrapper,
    Button,
    CreateProductContainer
 } from './CreateProductsStyle';

 interface IProductForm {
    name: string,
    price: string,
    // image: string,
    // category: string,
    // collection: string,
    description_en: string,
    description_es: string,
    description_ru: string,
}

const INITIAL_PRODUCT_FORM = {
    name: '',
    price: '',
    // image: '',
    // category: '',
    // collection: '',
    description_en: '',
    description_es: '',
    description_ru: '',
}

type Image = {[key: string]: {files?: File[]}};

export type IProduct = {form: IProductForm, files?: File[]};

const CreateProducts = ({edit}: {edit: boolean}): JSX.Element => {
    const [images, setImages] = useState<Image>({})
    const dispatch = useDispatch();
    const { forms, product, categories, collections } = useSelector( (store: any) => {
        return {
            forms: store.productsForms,
            product: store.product.product,
            categories: store.setData.categories,
            collections: store.setData.collections,
        }
    });

    const handlerDelete = (index: string) => {
        const keys = Object.keys(forms);
        const buffForms = forms as any;
        const newForms: any = {};
        const newImages: any[] = [];
        delete images[index as keyof Image];
        Array.from(keys).forEach( key => {
            if(key !== index){
                newForms[key] = buffForms[key];
            }
        })
        dispatch(deleteProductForm(newForms));
    }

    const handleChange = (form: any) => {
        dispatch(setProductForm({...forms, ...form}));
    }

    const getFiles = (files: File[], index: number) => {
        const key = index + '';
        images[key] = {files};
    }

    const getForms = (forms: any) => {
        if(!forms) return;

        const keys = Object.keys(forms);
        return Array.from(keys).map( key => {
            return <ProductForm key={key} index={key} form={forms[key]} edit={false} data={{categories, collections}} onClick={handlerDelete} onChange={handleChange} getFiles={getFiles} />
        })
    }

    const getForm = (form: any) => {
        if(!form) return;
        return <ProductForm form={product} index="0" data={{categories, collections}} edit={true} onClick={handlerDelete} onChange={handleChange} getFiles={getFiles} />
    }

    const handleClick = (event: any) => {
        event.preventDefault();
        const keys = Object.keys(forms);
        if(keys.length) {
            const newKey = Number(keys[keys.length - 1]);
            dispatch(setProductForm({...forms, ...{[newKey + 1]: INITIAL_PRODUCT_FORM}}));
        }else{
            dispatch(setProductForm({'0': INITIAL_PRODUCT_FORM}));
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const buff = Object.keys(forms)
        const products: IProduct[] = [];

        for (const index of buff) {
            products.push({form: forms[index], files: images![index as keyof Image].files})
        }

        dispatch({type: POST_PRODUCT, payload: products});        
    }

    const handleEdit = async (event: any) => {
        event.preventDefault();
        console.log(product)
        // const buff = Object.keys(forms)
        // const products: IProduct[] = [];

        // for (const index of buff) {
        //     products.push({form: forms[index], files: images![index as keyof Image].files})
        // }

        // dispatch({type: POST_PRODUCT, payload: products});        
    }

    return (
        <CreateProductContainer>
            <ProductsWrapper>
                {forms && !edit ? getForms(forms) : getForm(product)}
            </ProductsWrapper>
            {edit ? '' : <Button onClick={handleClick} >Add product</Button>}
            {edit ? <Button onClick={handleEdit} >Submit</Button> : <Button onClick={handleSubmit} >Submit</Button>}
        </CreateProductContainer>
    )
}

export default CreateProducts;
