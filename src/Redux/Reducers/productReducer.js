import { ActionTypes } from "../Constants/action-types";

const initialState = {
    products: []
}


export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return {...state, products: payload};

        case ActionTypes.DELETE_PRODUCTS:
            return {...state}
    
        default:

            return state;
    }
}