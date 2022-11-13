import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, ProductHover, ProductImage, ProductInfo } from './ProductStyle';
import { IProduct } from './ProductTypes';

const Product = ({product}: { product: IProduct}): JSX.Element => {
    
    return (
        <NavLink to={"/products/" + product.id} key={product.id} state={product} >
            <ProductImage src={product.url} alt={product.name} />
            <ProductHover>
                <ProductInfo>
                    <p className="product__name">{product.name}</p>
                    <p className="product__price">€ {product.price}</p>
                </ProductInfo>
            </ProductHover>
        </NavLink>
    )
}

export default Product;

/* <div className="product__btns">
                    <a href="{{ route('edit.product', $product->id)}}" class="edit">{{__('edit')}}</a>
                    
                    <form action="{{ route('delete.product', ['id' => $product->id]) }}" method="POST">
                        <button type="submit" class="delete">{{__('delete')}}</button>
                    </form>
                </div> */