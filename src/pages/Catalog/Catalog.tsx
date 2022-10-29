import { getProductsByFilter } from 'api/getProducts';
import Product from 'components/Product/Product';
import { IProduct } from 'components/Product/ProductTypes';
import React, { ReactElement, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setErrors } from 'redux/actions/actionCreator';
import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_FILTER, SET_FILTER } from 'redux/constans';

const Catalog = (): JSX.Element => {
    const dispatch = useDispatch();
    const { products, error, isLoading } = useSelector( (store: any) => {
        return {
            products: store.setProducts.products,
            error: store.setErrors.productsError,
            isLoading: store.loader.isLoadingData,
        }
    });

    const data = {
        name: '',
        category: 1,
        collection: 1,
        minPrice: 12,
        maxPrice: 50,
        order: 'asc',
    };

    useEffect( () => {
        dispatch({type: GET_ALL_PRODUCTS});
        dispatch({type: SET_FILTER, payload: data});
        setTimeout( () => {
            dispatch({type: GET_PRODUCTS_BY_FILTER});
        }, 2000)
    }, [dispatch])

    const renderProducts = (products: Array<IProduct>): Array<JSX.Element> => {
        const productsList: Array<JSX.Element> = products.map( (product: IProduct) => {
            return <Product key={product.id} product={product} />
        })
        return productsList;
    }
    return (
        <div className={'content'}>
            {isLoading ? <h3>Is Loading...</h3> : (error ? <h2>{error}</h2> : renderProducts(products)) }
            {/* {error ? <h2>{error}</h2> : renderProducts(products)} */}
        </div>
    )
}

export default Catalog;