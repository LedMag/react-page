import { DELETE_COLLECTION_FORM, SET_COLLECTION_FORM } from "redux/constans"

const initialState = {
    name: '',
    description_en: '',
    description_es: '',
    description_ru: '',
}

export const collectionForm = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_COLLECTION_FORM:
            return {
                ...state,
                ...payload
            };
        case DELETE_COLLECTION_FORM:
            return payload;
        default: return state;
    }
};