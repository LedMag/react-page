import { SET_PRODUCT_FORM, DELETE_PRODUCT_FORM } from "redux/constans";

const initialState = {
    '0': {
        image: '',
        name: '',
        price: '',
        // category: '',
        // collection: '',
        description_en: '',
        description_es: '',
        description_ru: '',
    }
}

export const productsForms = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_PRODUCT_FORM:
            return {
                ...state,
                ...payload
            };
        case DELETE_PRODUCT_FORM:
            return payload;
        default: return state;
    }
};
