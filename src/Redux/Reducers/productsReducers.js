import * as types from "../Constants/action-types";

const initialState = {
    products: [],
    product: {},
    variants:[],
    variant: {},
    loading: true,
}


export const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
            
        case types.ADD_PRODUCTS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_PRODUCTS:
            return {
                ...state,
                loading: false,
            }

        case types.DELETE_PRODUCTS:
            return {
                ...state,
                loading: false,
            }

    //For variant do not touch
        
        case types.ADD_VARIANTS:
            return {
                ...state,
                loading: false,
            }
        case types.GET_VARIANTS:
            return {
                ...state,
                variants: action.payload,
                loading: false,
            }

        default:
            return state;
    }  
};
