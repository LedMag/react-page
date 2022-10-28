import { SET_PRODUCTS, SET_PRODUCTS_ERROR } from '../constans';

export const setProducts = (payload: any) => ({
    type: SET_PRODUCTS,
    payload,
});

export const setErrors = (payload: string) => ({
    type: SET_PRODUCTS_ERROR,
    payload,
});