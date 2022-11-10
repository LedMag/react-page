import { SET_USER } from "redux/constans";

const initialState = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    roles: '',
}


export const setUser = (state = {}, {type, payload}: any) => {
    switch(type){
        case SET_USER:
            return {
                ...payload.user
            };
        default: return state;
    }
};
