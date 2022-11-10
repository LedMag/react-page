import { SET_ALL_CATEGORIES, SET_ALL_COLLECTIONS } from "redux/constans";

const initialState = {
    categories: [],
    collections: [],
}


export const setData = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_ALL_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        case SET_ALL_COLLECTIONS:
            return {
                ...state,
                collections: payload
            };
        default: return state;
    }
};
