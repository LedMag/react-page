import Product from 'components/Product/Product';
import { IProduct } from 'components/Product/ProductTypes';
import React, { ReactElement, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

class ContainerCatalog extends React.Component {
    constructor(props: any){
        super(props);
        const dispatch = useDispatch();
        const state = useSelector(store => store);
    }

    getProducts = () => {
        // dispatch(getAllProducts());
    }

    renderProducts(products: Array<IProduct>): Array<JSX.Element> {
        const productsList: Array<JSX.Element> = products.map( (product: IProduct) => {
            return <Product key={product.id} product={product} />
        })
        return productsList;
    }

    render() {
        return (
            <div>
                {/* {renderProducts(products)} */}
            </div>
        )
    }
}

export default ContainerCatalog;