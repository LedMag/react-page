import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ProductBox, ProductImages, ProductImage, ProductInfo, ProductImageView, Buttons, Editar, Delete } from './ProductDetailsStyle';
import { IProduct } from '../ProductTypes';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCT } from 'redux/constans';
import { deleteProduct } from 'redux/actions/actionCreator';

const ProductDetails = (/* {product}: { product: IProduct} */): JSX.Element => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [selected, setSelected] = useState('');

    useEffect( () => {
        dispatch({type: GET_PRODUCT, payload: id});
    }, [dispatch]);

    const { product, isAuth, error, isLoading } = useSelector( (store: any) => {
        return {
            product: store.product.product as IProduct,
            error: store.setErrors.productError,
            isLoading: store.loader.isLoadingData,
            lang: store.lang,
            isAuth: store.setUser && store.setUser.role === 'admin' ? true : false
        }
    });

    useEffect( () => {
        setActiveImg(null)
    }, [product]);
    
    const renderImages = (): Array<JSX.Element> | undefined => {
        const url = `${process.env.REACT_APP_API_URL}/product/getImage/${id}/`;
        if(!product.imgs) return;
        const imagesList: Array<JSX.Element> = product.imgs
        .map( (image: string, index: number) => {
            return <ProductImage key={index} src={url+image} alt={product.name} onClick={setActiveImg} className='product__img'/>
        })
        return imagesList;
    }

    const setActiveImg = (event: any) => {
        if(event) {
        Array.from(event.target.parentElement.childNodes)
        .forEach( (elem: any) => {
            elem.classList.remove('active');
        })
        event.target?.classList.add('active');
        setSelected(event.target.src);
        } else {
            const img: HTMLImageElement | null = document.querySelector('.product__img');
            img?.classList.add('active');
            setSelected(img?.src || '');
        }
    }

    const handlerDelete = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(deleteProduct(product.id));
    }

    const getDescription = () => {
        const lang = localStorage.getItem('locale');
        const key: string = `description_` + (lang ? lang.slice(0, 2) : 'en');
        const description = product[key as keyof IProduct];
        return description;
    }

    return (
        <ProductBox>
            {
                isAuth ?
                <Buttons>
                    <Editar to={"/admin/products/edit/" + product.id} state={product} ><FormattedMessage id={"edit"} /></Editar>
                    <Delete onClick={handlerDelete}><FormattedMessage id={"delete"} /></Delete>
                </Buttons>
                : ''
            }
            <ProductImageView src={selected} alt={product.name} />
            <ProductImages>
                {renderImages()}
            </ProductImages>
            <ProductInfo>
                <p className="product__name">{product.name}</p>
                <p className="product__price">€ {product.price}</p>
                {/* <p className="product__price">{product.category}</p>
                <p className="product__price">{product.collection}</p> */}
                {getDescription() ? <p className="product__description">{getDescription()}</p> : ""}                
            </ProductInfo>
        </ProductBox>
    )
}

export default ProductDetails;