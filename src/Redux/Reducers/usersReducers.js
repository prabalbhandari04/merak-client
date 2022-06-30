import * as types from "../constants/action-types";

const initialState = {
    users: [],
    user: {}, //single user
    errorMessageLogin: '',
    errorMessageRegister: [],
    errorMessageProfile: '',
    successMessage: '',
    loading: true,
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        

        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        case types.GET_USER: //single User
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
            
        case types.CREATE_USERS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_USERS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_PASSWORD:
            return {
                ...state,
                loading: false,
            }


        
        case types.LOGIN_USERS:
            return {
                ...state,
                errormessage: action.payload,
                loading: false,
            }


            case types.SET_SUCCESS_LOGIN:
                return {
                    ...state,
                    successMessage: action.payload,
                    loading: false,
                }

        
        case types.SET_ERROR_PROFILE:
        return {
            ...state,
            errorMessageProfile: action.payload,
            loading: false,
        }
        
        case types.SET_ERROR_LOGIN:
            return {
                ...state,
                errorMessageLogin: action.payload,
                loading: false,
            }
        
            case types.SET_ERROR_REGISTER:
                return {
                    ...state,
                    errorMessageRegister: action.payload,
                    loading: false,
                }

        default:
            return state;
    }  
};
