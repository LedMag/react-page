import { 
    SET_CART,
    DELETE_CART,
    UPDATE_CART
} from "redux/constans";

type CartElem = {
    product: any,
    amount: number
}

type Payload = {
    product: any,
    act: string
}

const initialState: {cart: CartElem[]} = {
    cart: [],
}

export const cart = (state = initialState, {type, payload}: {type: string, payload: Payload}) => {
    switch(type){
        case SET_CART:
            return {
                cart: [...state.cart, {product: payload.product, amount: 1}]
            };
        case UPDATE_CART:
            if(payload.act === 'inc') {
                state.cart.forEach( prod => {
                    if(prod.product.id === payload.product.id) {
                        prod.amount++
                    }
                })
            } else {
                state.cart.forEach( prod => {
                    if(prod.product.id === payload.product.id) {
                        prod.amount--
                    }
                })
                state.cart = state.cart.filter( product => product.amount)
            }
            return state
        case DELETE_CART:
            return {
                cart: []
            };
        default: return state;
    }
};
