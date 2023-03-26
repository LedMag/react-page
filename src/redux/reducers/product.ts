import { SET_PRODUCT } from "redux/constans";

const initialState = {
    product: {},
}


export const product = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_PRODUCT:
            return {
                product: payload
            };
        default: return state;
    }
};
