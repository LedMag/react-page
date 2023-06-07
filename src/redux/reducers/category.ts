import { DELETE_PRODUCT_FORM, SET_CATEGORY_FORM } from "redux/constans";

const initialState =  {
    name: '',
    description_en: '',
    description_es: '',
    description_ru: '',
}

export const categoryForm = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_CATEGORY_FORM:
            return {
                ...state,
                ...payload
            };
        case DELETE_PRODUCT_FORM:
            return payload;
        default: return state;
    }
};
