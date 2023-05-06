import { getImage } from 'api/getProducts';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { deleteProduct, setCart, updateCart } from 'redux/actions/actionCreator';
import {
    NavLink,
    ProductBtns,
    Add,
    Cancel,
    ProductHover,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    Delete,
 } from './ProductStyle';
import { IProduct } from './ProductTypes';

const Product = ({product, isAllowed}: { product: IProduct, isAllowed: boolean}): JSX.Element => {
    // const [image, setImage] = useState<string>('');
    const [checked, setChecked] = useState(false);

    // const createImageFromBlob = (chunk: Blob) => {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => {
    //         if(reader.result) {
    //             setImage(reader.result as string);     
    //         }
    //     });
    
    //     if (chunk) {
    //       reader.readAsDataURL(chunk);
    //     }
    // }

    const dispatch = useDispatch();

    const handlerDelete = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(deleteProduct(product.id));
    }

    const handlerSetCart = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(setCart({product}));
        setChecked(true);
    }

    const handlerDecrementCart = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(updateCart({product, act: 'dec'}));
        setChecked(false);
    }

    return (
        <NavLink to={"/products/" + product.id} key={product.id} state={product.id} >
            <ProductImage src={product.img_url} alt={product.name} />
            <ProductHover>
                <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}€</ProductPrice>
                </ProductInfo>
                <ProductBtns>
                    {checked ? <Cancel onClick={handlerDecrementCart}>Cancel</Cancel> : <Add onClick={handlerSetCart}>Add</Add>}
                    {isAllowed ? <Delete onClick={handlerDelete}><FormattedMessage id={"delete"} /></Delete> : ''}
                </ProductBtns>
            </ProductHover>
        </NavLink>
    )
}

export default Product;