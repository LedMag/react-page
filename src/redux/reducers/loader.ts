import { SET_LOADING_DATA } from "redux/constans";

const initialState = {
    isLoadingData: false,
}


export const loader = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_LOADING_DATA:
            return {
                ...state,
                isLoadingData: payload
            };
        default: return state;
    }
};
