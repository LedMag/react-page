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
            <ProductImage src={`${process.env.REACT_APP_API_URL}/product/getImage/${product.id}/${product.img_url}`} alt={product.name} />
            <ProductHover>
                <ProductInfo>
                    <p className="product__name">{product.name}</p>
                    <p className="product__price">€ {product.price}</p>
                </ProductInfo>
                <ProductBtns>
                    {checked ? <Cancel onClick={handlerDecrementCart}>Cancel</Cancel> : <Add onClick={handlerSetCart}>Add</Add>}
                </ProductBtns>
            </ProductHover>
            {
                isAllowed ?
                <Delete onClick={handlerDelete}><FormattedMessage id={"delete"} /></Delete> :
                ''
            }
        </NavLink>
    )
}

export default Product;