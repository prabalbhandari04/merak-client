import * as types from "../constants/action-types";

const initialState = {
    orders: [],
    order: {},
    loading: true,
}


export const ordersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
            };
            
        case types.ADD_ORDERS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_ORDERS:
            return {
                ...state,
                loading: false,
            }

        case types.DELETE_ORDERS:
            return {
                ...state,
                loading: false,
            }

    //For variant do not touch
        
        // case types.ADD_VARIANTS:
        //     return {
        //         ...state,
        //         loading: false,
        //     }
        default:
            return state;
    }  
};
