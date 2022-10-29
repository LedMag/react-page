import { SET_FILTER } from "redux/constans";

const initialState = {
    filter: {},
}


export const setFilter = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_FILTER:
            return {
                ...state,
                filter: payload
            };
        default: return state;
    }
};
