import { SET_PRODUCTS } from "redux/constans";

const initialState = {
    products: [],
}


export const setProducts = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default: return state;
    }
};
