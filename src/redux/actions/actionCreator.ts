import { 
    SET_LANG,
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR,
    SET_LOADING_DATA,
    SET_ALL_CATEGORIES,
    SET_ALL_COLLECTIONS,
    SET_FILTERS,
    SET_USER,
    SET_LOGIN_FORM,
    SET_REGISTRATION_FORM,
    SET_PRODUCT_FORM,
    DELETE_PRODUCT,
    DELETE_PRODUCT_FORM,
    TOGGLE_FILTER,
    SET_PRODUCT,
    GET_CART,
    SET_CART,
    DELETE_CART,
    UPDATE_CART
} from '../constans';

export const setLang = (payload: any) => ({
    type: SET_LANG,
    payload,
});

export const setProducts = (payload: any) => ({
    type: SET_PRODUCTS,
    payload,
});

export const setProduct = (payload: any) => ({
    type: SET_PRODUCT,
    payload,
});

export const setFilters = (payload: any) => ({
    type: SET_FILTERS,
    payload,
});

export const setUser = (payload: any) => ({
    type: SET_USER,
    payload,
});

export const logout = (payload = {id: 0, email: '', role: ''}) => ({
    type: SET_USER,
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

export const setCategories = (payload: any) => ({
    type: SET_ALL_CATEGORIES,
    payload,
});

export const setCollections = (payload: any) => ({
    type: SET_ALL_COLLECTIONS,
    payload,
});

export const setLoginForm = (payload: any) => ({
    type: SET_LOGIN_FORM,
    payload,
});

export const setRegistrationForm = (payload: any) => ({
    type: SET_REGISTRATION_FORM,
    payload,
});

export const setProductForm = (payload: any) => ({
    type: SET_PRODUCT_FORM,
    payload,
});

export const deleteProductForm = (payload: any) => ({
    type: DELETE_PRODUCT_FORM,
    payload,
});

export const deleteProduct = (payload: number) => ({
    type: DELETE_PRODUCT,
    payload,
});

export const toggleFilter = (payload: boolean) => ({
    type: TOGGLE_FILTER,
    payload,
});

export const getCart = (payload: any) => ({
    type: GET_CART,
    payload,
});

export const setCart = (payload: any) => ({
    type: SET_CART,
    payload,
});

export const updateCart = (payload: any) => ({
    type: UPDATE_CART,
    payload,
});

export const deleteCart = () => ({
    type: DELETE_CART
});