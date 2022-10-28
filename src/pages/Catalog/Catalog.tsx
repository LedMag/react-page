import Product from 'components/Product/Product';
import { IProduct } from 'components/Product/ProductTypes';
import React, { ReactElement, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_PRODUCTS } from 'redux/constans';

const Catalog = (): JSX.Element => {
    const dispatch = useDispatch();
    const products = useSelector( (store: any) => store.setProducts.products);

    useEffect( () => {
        dispatch({type: GET_ALL_PRODUCTS})
    }, [dispatch])

    const renderProducts = (products: Array<IProduct>): Array<JSX.Element> => {
        const productsList: Array<JSX.Element> = products.map( (product: IProduct) => {
            return <Product key={product.id} product={product} />
        })
        return productsList;
    }
    return (
        <div className={'content'}>
            {renderProducts(products)}
        </div>
    )
}

export default Catalog;