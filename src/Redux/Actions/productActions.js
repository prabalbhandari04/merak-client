import { ActionTypes } from "../Constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
