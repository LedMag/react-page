import { 
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR,
    SET_LOADING_DATA,
    SET_FILTER,
 } from '../constans';

export const setProducts = (payload: any) => ({
    type: SET_PRODUCTS,
    payload,
});

export const setErrors = (payload: string) => ({
    type: SET_PRODUCTS_ERROR,
    payload,
});

export const setLoaderState = (payload: boolean) => ({
    type: SET_LOADING_DATA,
    payload,
});

export const setFilter = (payload: boolean) => ({
    type: SET_FILTER,
    payload,
});