import { SET_LOGIN_FORM } from "redux/constans";

const initialState = {
    email: '',
    password: '',
}


export const loginForm = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_LOGIN_FORM:
            return {
                ...state,
                ...payload
            };
        default: return state;
    }
};
