import { getAllProducts, getProductsByFilter } from "../../api/getProducts";
import { put, call, all, fork, takeLatest } from 'redux-saga/effects'
import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_FILTER } from "redux/constans";
import { setProducts, setErrors, setLoaderState } from "redux/actions/actionCreator";
import store from "redux/store";

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
        const { filter } = store.getState().setFilter
        const products: Generator = yield call(getProductsByFilter, filter);
        yield put(setProducts(products));
    } catch (error) {
        yield put(setErrors('Products are not found'));
    }
    yield put(setLoaderState(false));
}

export function* watchProductsSaga() {
    yield takeLatest(GET_ALL_PRODUCTS, handlerGetProducts);
    yield takeLatest(GET_PRODUCTS_BY_FILTER, handlerGetProductsByFilter);
}

export default function* rootSaga() {
    yield all([
        fork(watchProductsSaga)
    ]) 
}