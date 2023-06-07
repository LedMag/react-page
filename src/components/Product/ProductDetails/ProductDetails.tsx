import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ProductBox, ProductImages, ProductImage, ProductInfo, ProductImageView, Buttons, Editar, Delete } from './ProductDetailsStyle';
import { IProduct } from '../ProductTypes';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCT } from 'redux/constans';
import noImage from 'utils/images/no-photo-available.png';
import { deleteProduct, setLoaderState } from 'redux/actions/actionCreator';

const ProductDetails = (/* {product}: { product: IProduct} */): JSX.Element => {

    const { id } = useParams();

    const { product, lang, isAuth } = useSelector( (store: any) => {
        return {
            product: store.product.product.data as IProduct,
            lang: store.lang,
            isLoader: store.loader.isLoader,
            isAuth: store.setUser && store.setUser.role === 'admin' ? true : false
        }
    });

    const dispatch = useDispatch();
    const [selected, setSelected] = useState<string>();
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        dispatch(setLoaderState(true));
        dispatch({type: GET_PRODUCT, payload: id});
    }, [dispatch]);

    useEffect( () => {
        if(!product) return;
        setLoading(false);
        if(product.img_url) setSelected(product.img_url);
        setActiveImg(null);
    }, [product]);
    
    const renderImages = (): Array<JSX.Element> | undefined => {
        const url = `${process.env.REACT_APP_API_URL}/products/image?id=${id}&url=`;
        if(!product.imgs) return;
        const imagesList: Array<JSX.Element> = product.imgs
        .map( (image: string, index: number) => {
            return <ProductImage key={index} src={`${url}${image || ""}`} alt={product.name} onClick={setActiveImg} className='product__img'/>
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
            if(img?.src) setSelected(img.src);
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
        const description: string = product[key as keyof IProduct] as string;
        return description;
    }

    return (
        <>
        {loading ? <div>Product is loading...</div> : <ProductBox>
            {
                isAuth ?
                <Buttons>
                    <Editar to={"/admin/products/edit/" + product.id} state={product} ><FormattedMessage id={"edit"} /></Editar>
                    <Delete onClick={handlerDelete}><FormattedMessage id={"delete"} /></Delete>
                </Buttons>
                : ''
            }
            <ProductImageView src={selected || noImage} alt={product.name} />
            <ProductImages>
                {renderImages()}
            </ProductImages>
            <ProductInfo>
                <p className="product__name"><FormattedMessage id={"name"} />: {product.name}</p>
                <p className="product__price"><FormattedMessage id={"price"} />: {product.price}€</p>
                <p className="product__category"><FormattedMessage id={"category"} />: {product.category.name}</p>
                <p className="product__collection"><FormattedMessage id={"collection"} />: {product.collection.name}</p>
                {getDescription() ? <p className="product__description"><FormattedMessage id={"description"} />: {getDescription()}</p> : ""}                
            </ProductInfo>
        </ProductBox>
        }
        </>
    )
}

export default ProductDetails;