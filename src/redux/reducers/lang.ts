import { SET_LANG } from "redux/constans";

export const lang = (state = '', {type, payload}: any) => {
    switch(type){
        case SET_LANG:
            return payload;
        default: return state;
    }
};
