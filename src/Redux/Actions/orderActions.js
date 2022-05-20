import { ActionTypes } from "../Constants/action-types";

export const setOrders = (orders) => {
    return {
        type: ActionTypes.SET_ORDERS,
        payload: orders,
    }
}
