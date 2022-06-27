import * as types from "../constants/action-types";
import axios from "axios";

//Authentication Header-------------------------------
const token = localStorage.getItem('access_token')

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};


//----------------------------------------------------





//------------Get Ouders----------------------------
const getOrders = (orders) => ({
    type: types.GET_ORDERS,
    payload: orders,
})


// //------------Post Ouders----------------------------
// const ordersAdd = () => ({
//     type: types.ADD_ORDERS,
// })

// //------------Put Ouders----------------------------
// const ordersUpdate = () => ({
//     type: types.UPDATE_ORDERS,
// })

// //------------Delete Ouders----------------------------

// const ordersDelete = () => ({
//     type: types.DELETE_ORDERS,
// })


//------------Api Call Get Products----------------------------
export const loadOrders = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/`, {headers: headers}).then((res) => {
            dispatch(getOrders(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const addOrders = (product) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/inventory/order/`, product, {headers: headers}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}

export const putOrders = (uuid, product) => {
    return function (dispatch) {
        axios.patch(`https://merak-test.onrender.com/inventory/order/${uuid}/`, product, {headers: headers}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const deleteOrders = (uuid) => {
    return function (dispatch) {
        axios.delete(`https://merak-test.onrender.com/inventory/order/${uuid}/`, {headers: headers}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}




