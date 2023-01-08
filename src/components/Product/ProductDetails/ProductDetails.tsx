import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ProductBox, ProductImages, ProductImage, ProductInfo } from './ProductDetailsStyle';
import { IProduct } from '../ProductTypes';
import { useLocation } from 'react-router-dom';

const ProductDetails = ( /* {product}: { product: IProduct} */): JSX.Element => {

    const product = useLocation().state;

    const getDescription = () => {
        const lang = localStorage.getItem('locale');
        const key: string = `description_` + (lang ? lang.slice(0, 2) : 'en');
        const description = product[key];
        return description;
    }

    return (
        <ProductBox>
            <ProductImage src={product.img_url} alt={product.name} />
            <ProductImages>
                {/* <ProductImage src={product.images[0]} alt={product.name} />
                <ProductImage src={product.images[1]} alt={product.name} />
                <ProductImage src={product.images[2]} alt={product.name} /> */}
            </ProductImages>
            <ProductInfo>
                <p className="product__name">{product.name}</p>
                <p className="product__price">€ {product.price}</p>
                {/* <p className="product__price">{product.category}</p>
                <p className="product__price">{product.collection}</p> */}
                <p className="product__description">{getDescription()}</p>
            </ProductInfo>
        </ProductBox>
    )
}

export default ProductDetails;

/* <div className="product__btns">
                    <a href="{{ route('edit.product', $product->id)}}" class="edit">{{__('edit')}}</a>
                    
                    <form action="{{ route('delete.product', ['id' => $product->id]) }}" method="POST">
                        
                    </form>
                </div> */