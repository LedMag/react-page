import { SET_FILTERS } from "redux/constans";

const initialState = {
    filters: {
        name: '',
        category: 0,
        collection: 0,
        minPrice: 0,
        maxPrice: 999,
        order: 'asc'
    }
}


export const setFilters = (state = initialState, {type, payload}: any) => {
    switch(type){
        case SET_FILTERS:
            return {
                ...state,
                filters: {...state.filters, ...payload}
            };
        default: return state;
    }
};
