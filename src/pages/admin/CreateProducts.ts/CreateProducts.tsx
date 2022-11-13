import ProductForm from 'components/Product/ProductForm/ProductForm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductForm, setProductForm } from 'redux/actions/actionCreator';
import { GET_ALL_PRODUCTS, POST_PRODUCTS } from 'redux/constans';
import { 
    Container,
    ProductsWrapper,
    Button,
 } from './CreateProductsStyle';

 interface IProductForm {
    name: string,
    price: string,
    image: string,
    category: string,
    collection: string,
    description_en: string,
    description_es: string,
    description_ru: string,
}

const INITIAL_PRODUCT_FORM = {
    name: '',
    price: '',
    image: '',
    category: '',
    collection: '',
    description_en: '',
    description_es: '',
    description_ru: '',
}

const CreateProducts = (): JSX.Element => {
    const dispatch = useDispatch();
    const { forms, categories, collections } = useSelector( (store: any) => {
        return {
            forms: store.productsForms,
            categories: store.setData.categories,
            collections: store.setData.collections,
        }
    });

    const handlerDelete = (index: string) => {
        const keys = Object.keys(forms);
        const buffForms = forms as any;
        const newForms: any = {};
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

    const getForms = (forms: any) => {
        if(!forms) return;

        const keys = Object.keys(forms);
        return Array.from(keys).map( key => {
            return <ProductForm key={key} index={key} form={forms[key]} data={{categories, collections}} onClick={handlerDelete} onChange={handleChange} />
        })
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

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch({type: POST_PRODUCTS});
    }

    return (
        <Container>
            <ProductsWrapper>
                {forms ? getForms(forms) : ''}
            </ProductsWrapper>
            <Button onClick={handleClick} >Add product</Button>
            <Button onClick={handleSubmit} >Submit</Button>
        </Container>
    )
}

export default CreateProducts;
