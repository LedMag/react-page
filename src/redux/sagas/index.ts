import { getAllProducts } from "../../api/getProducts";
import { put, call, all, fork, takeLatest } from 'redux-saga/effects'
import { GET_ALL_PRODUCTS } from "redux/constans";
import { setProducts, setErrors } from "redux/actions/actionCreator";

export function* handlerGetProducts() {
    try {
        const products: Generator = yield call(getAllProducts);
        yield put(setProducts(products));
    } catch (error) {
        yield put(setErrors('Products are not found'));
    }

}

export function* watchProductsSaga() {
    yield takeLatest(GET_ALL_PRODUCTS, handlerGetProducts)
}

export default function* rootSaga() {
    yield all([
        fork(watchProductsSaga)
    ]) 
}