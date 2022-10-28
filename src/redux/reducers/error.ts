import { SET_PRODUCTS_ERROR } from "redux/constans";

const initialState = {
    productsError: '',
}


export const setErrors = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_PRODUCTS_ERROR:
            return {
                ...state,
                productsError: payload
            };
        default: return state;
    }
};
