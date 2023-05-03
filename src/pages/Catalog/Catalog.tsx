import { getImage, getProductsByFilter } from 'api/getProducts';
import FilterContainer from 'components/Filter/FilterContainer';
import Product from 'components/Product/Product';
import { IProduct } from 'components/Product/ProductTypes';
import React, { ReactElement, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setErrors } from 'redux/actions/actionCreator';
import { GET_ALL_PRODUCTS } from 'redux/constans';
import { CatalogBox, Content, ProductBox } from './CatalogStyle';

const PSEUDA_PRODUCTS = [
    {
        id: 1,
        name: "testName",
        img_url: "https://i.pinimg.com/originals/72/c5/26/72c52603dbbc669e0cc6716e42c61dc8.jpg",
        imgs: [],
        // category: string,
        // collection: string,
        description_en: "string",
        description_es: "string",
        description_ru: "string",
        price: 12,
    },
    {
        id: 2,
        name: "testName",
        img_url: "https://i.pinimg.com/originals/72/c5/26/72c52603dbbc669e0cc6716e42c61dc8.jpg",
        imgs: [],
        // category: string,
        // collection: string,
        description_en: "string",
        description_es: "string",
        description_ru: "string",
        price: 12,
    },
    {
        id: 3,
        name: "testName",
        img_url: "https://i.pinimg.com/originals/72/c5/26/72c52603dbbc669e0cc6716e42c61dc8.jpg",
        imgs: [],
        // category: string,
        // collection: string,
        description_en: "string",
        description_es: "string",
        description_ru: "string",
        price: 12,
    },
    {
        id: 4,
        name: "testName",
        img_url: "https://i.pinimg.com/originals/72/c5/26/72c52603dbbc669e0cc6716e42c61dc8.jpg",
        imgs: [],
        // category: string,
        // collection: string,
        description_en: "string",
        description_es: "string",
        description_ru: "string",
        price: 12,
    },
    {
        id: 5,
        name: "testName",
        img_url: "https://i.pinimg.com/originals/72/c5/26/72c52603dbbc669e0cc6716e42c61dc8.jpg",
        imgs: [],
        // category: string,
        // collection: string,
        description_en: "string",
        description_es: "string",
        description_ru: "string",
        price: 12,
    },
]

const Catalog = ({isAllowed}: {isAllowed: boolean}): JSX.Element => {
    const dispatch = useDispatch();
    const { products, error, isLoading } = useSelector( (store: any) => {
        return {
            products: PSEUDA_PRODUCTS, // store.products.products,
            error: store.setErrors.productsError,
            isLoading: store.loader.isLoadingData,
        }
    });

    useEffect( () => {
        dispatch({type: GET_ALL_PRODUCTS});
    }, [dispatch])

    const renderProducts = (products: Array<IProduct>): Array<JSX.Element> | undefined => {  
        if(!products.length) return;      
        const productsList: Array<JSX.Element> = products.map( (product: IProduct) => {
            return <ProductBox key={product.id}><Product key={product.id} product={product} isAllowed={isAllowed}/></ProductBox>
        });
        return productsList;
    }

    return (
        <>
            <FilterContainer />
            <Content className={'content'}>
                {isLoading ? <h3 style={{'width': '100%'}}>Is Loading...</h3> : ( error && !products.length ? <h2 style={{'width': '100%'}}>{error}</h2> : renderProducts(products) ) }
            </Content>
        </>
    )
}

export default Catalog;