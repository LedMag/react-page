import { SET_FILTERS, TOGGLE_FILTER } from "redux/constans";

const initialState = {
    filters: {
        name: '',
        category: 0,
        collection: 0,
        minPrice: 0,
        maxPrice: 99,
        order: 'asc'
    }
}

const isOpen = false;

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

export const toggleFilter = (state = isOpen, {type, payload}: any) => {
    switch(type){
        case TOGGLE_FILTER:
            return state = payload
        default: return state;
    }
};
