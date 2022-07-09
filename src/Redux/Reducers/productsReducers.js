import * as types from "../constants/action-types";

const initialState = {
    products: [],
    product: {},
    variants: [],
    variantsField: [],
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

    

    //Vairant Field GET
        case types.GET_VARIANTS_FIELD:
            return {
                ...state,
                variantsField: action.payload,
                loading: false,
            };

        case types.ADD_VARIANTS_FIELD:
            return {
                ...state,
                loading: false,
            }

    //Variant GET and Post
        
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
