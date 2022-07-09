import * as types from "../constants/action-types";

const initialState = {
    organizations: [],
    organization: {},
    errorMessageOrganization: '',
    teams: [],
    team: {},
    loading: true,
}


export const organizationReducers = (state = initialState, action) => {
    

    switch (action.type) {

        case types.GET_ORGANIZATIONS:
            return {
                ...state,
                organizations: action.payload,
                loading: false,
            };
            

      
            
        case types.ADD_ORGANIZATIONS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_ORGANIZATIONS:
            return {
                ...state,
                loading: false,
            }

        case types.DELETE_ORGANIZATIONS:
            return {
                ...state,
                loading: false,
            }


        //------------------Team CRUD------------------

        case types.GET_TEAMS:
            return {
                ...state,
                teams: action.payload,
                loading: false,
            };

        case types.ADD_TEAMS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_TEAMS:
            return {
                ...state,
                loading: false,
            }

        case types.DELETE_TEAMS:
            return {
                ...state,
                loading: false,
            }

        case types.SET_ERROR_ORGANIZATION:
            return {
                ...state,
                errorMessageOrganization: action.payload,
                loading: false,
            }

    
        default:
            return state;
    }  

    
};
