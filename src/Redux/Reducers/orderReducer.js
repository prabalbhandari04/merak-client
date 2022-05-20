import { ActionTypes } from "../Constants/action-types";

const initialState = {
    products: []
}


export const productOrders = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ORDERS:

            return {...state, orders: payload};
    
        default:

            return state;
    }
}