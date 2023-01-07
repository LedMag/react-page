import { getImage } from 'api/getProducts';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'redux/actions/actionCreator';
import {
    NavLink,
    ProductHover,
    ProductImage,
    ProductInfo,
    Delete,
 } from './ProductStyle';
import { IProduct } from './ProductTypes';

const Product = ({product}: { product: IProduct}): JSX.Element => {
    const [image, setImage] = useState<string>('');

    const createImageFromBlob = (chunk: Blob) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            if(reader.result) {
                setImage(reader.result as string);     
            }
        });
    
        if (chunk) {
          reader.readAsDataURL(chunk);
        }
    }

    useEffect( () => {
        getImage(product.id+'').then( data => {
            if(data){
                createImageFromBlob(data)
            }
        })
    })

    const dispatch = useDispatch();
    const isAdmin = true;

    const handlerDelete = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(deleteProduct(product.id));
    }
    return (
        <NavLink to={"/products/" + product.id} key={product.id} state={product} >
            <ProductImage src={image} alt={product.name} />
            <ProductHover>
                <ProductInfo>
                    <p className="product__name">{product.name}</p>
                    <p className="product__price">€ {product.price}</p>
                </ProductInfo>
            </ProductHover>
            {
                isAdmin ?
                <Delete onClick={handlerDelete}>Delete</Delete> :
                ''
            }
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