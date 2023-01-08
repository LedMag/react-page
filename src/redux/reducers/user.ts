import { SET_USER } from "redux/constans";

const initialState = {
    id: 0,
    email: "",
    role: "",
}


export const setUser = (state = {}, {type, payload}: any) => {
    switch(type){
        case SET_USER:
            return {
                ...payload
            };
        default: return state;
    }
};
