import { SET_PRODUCT_FORM, DELETE_PRODUCT_FORM } from "redux/constans";

const initialState = {
    '0': {
        name: '',
        price: 0,
        category: 0,
        collection: 0,
        img_url:'',
        imgs: [],
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
