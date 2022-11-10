import { SET_REGISTRATION_FORM } from "redux/constans";

const initialState = {
    name: '',
    surname: '',
    email: '',
    role: '',
    password: '',
    password_confirmation: '',
}


export const registrationForm = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_REGISTRATION_FORM:
            return {
                ...state,
                ...payload
            };
        default: return state;
    }
};
