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

const Catalog = ({isAllowed}: {isAllowed: boolean}): JSX.Element => {
    const dispatch = useDispatch();
    const { products, error, isLoading } = useSelector( (store: any) => {
        return {
            products: store.products.products,
            error: store.setErrors.productsError,
            isLoading: store.loader.isLoadingData,
        }
    });

    useEffect( () => {
        dispatch({type: GET_ALL_PRODUCTS});
    }, [dispatch])

    const renderProducts = (products: Array<IProduct>): Array<JSX.Element> => {        
        const productsList: Array<JSX.Element> = products.map( (product: IProduct) => {
            return <ProductBox key={product.id}><Product key={product.id} product={product} isAllowed={isAllowed}/></ProductBox>
        })
        return productsList;
    }

    return (
        <CatalogBox>
            <FilterContainer />
            <Content className={'content'}>
                {isLoading ? <h3 style={{'width': '100%'}}>Is Loading...</h3> : (error && !products ? <h2 style={{'width': '100%'}}>{error}</h2> : renderProducts(products)) }
            </Content>
        </CatalogBox>
    )
}

export default Catalog;