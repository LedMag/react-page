import { getAllProducts, getProductsByFilter } from "../../api/getProducts";
import { put, call, all, fork, takeLatest, debounce } from 'redux-saga/effects'
import { setProducts, setErrors, setLoaderState, setCategories, setCollections, setUser, deleteProductForm } from "redux/actions/actionCreator";
import store from "redux/store";
import { getAllCategories, getAllCollections } from "api/getData";
import { login, logout, register } from "api/auth";
import {
    GET_ALL_PRODUCTS,
    GET_DATA,
    GET_PRODUCTS_BY_FILTER,
    GET_USER,
    POST_USER,
    LOGOUT,
    POST_PRODUCTS,
    DELETE_PRODUCT,
} from "redux/constans";
import { postProducts } from "api/postProducts";
import { deleteProducts } from "api/deleteProducts";

export function* handlerGetProducts() {
    yield put(setLoaderState(true));
    try {
        const products: Generator = yield call(getAllProducts);
        yield put(setProducts(products));
    } catch (error) {
        yield put(setErrors('Products are not found'));
    }
    yield put(setLoaderState(false));
}

export function* handlerGetProductsByFilter() {
    yield put(setLoaderState(true));
    try {
        const { filters } = store.getState().setFilters;
        const products: Generator = yield call(getProductsByFilter, filters);
        yield put(setProducts(products));
    } catch (error) {
        yield put(setErrors('Products are not found'));
    }
    yield put(setLoaderState(false));
}

export function* handlerPostUser() {
    yield put(setLoaderState(true));
    try {
        const registrationForm = store.getState().registrationForm;

        const user: Generator = yield call(register, registrationForm);
    } catch (error) {
        yield put(setErrors('User was not registrated'));
    }
    yield put(setLoaderState(false));
}

export function* handlerGetUser() {
    yield put(setLoaderState(true));
    try {
        const loginForm = store.getState().loginForm;

        const user: Generator = yield call(login, loginForm);
        yield console.log('User', user)
        yield put(setUser(user));
    } catch (error) {
        yield put(setErrors('User is not found'));
    }
    yield put(setLoaderState(false));
}

export function* handlerGetData() {
    try {
        const categories: Generator = yield call(getAllCategories);
        yield put(setCategories(categories));
        const collections: Generator = yield call(getAllCollections);
        yield put(setCollections(collections));
    } catch (error) {
        throw new Error('Data is not founded');
    }
}

export function* handlerLogout() {
    try {
        const token = store.getState().setUser.access_token;

        const response: Generator = yield call(logout, token);
        // yield put(setUser({}));
    } catch (error) {
        throw new Error('Error of logout');
    }
}

export function* handlerCreateProducts() {
    try {
        const forms = store.getState().productsForms;

        const response: Generator = yield call(postProducts, forms);
        yield put(deleteProductForm({}));
    } catch (error) {
        throw new Error('Error of Post Products');
    }
}

export function* handlerDeleteProducts(action: any) {
    try {
        const response: Generator = yield call(deleteProducts, action.payload);
        yield handlerGetProducts();
    } catch (error) {
        throw new Error('Error of Post Products');
    }
}

export function* watchProductsSaga() {
    yield debounce(500, GET_PRODUCTS_BY_FILTER, handlerGetProductsByFilter);
    yield takeLatest(GET_ALL_PRODUCTS, handlerGetProducts);
    yield takeLatest(GET_DATA, handlerGetData);
    yield takeLatest(GET_USER, handlerGetUser);
    yield takeLatest(POST_USER, handlerPostUser);
    yield takeLatest(POST_PRODUCTS, handlerCreateProducts);
    yield takeLatest(DELETE_PRODUCT, handlerDeleteProducts);
    yield takeLatest(LOGOUT, handlerLogout);
}

export default function* rootSaga() {
    yield all([
        fork(watchProductsSaga)
    ]);
}
