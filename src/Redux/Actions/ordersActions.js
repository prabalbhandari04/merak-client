import * as types from "../Constants/action-types";
import axios from "axios";

//Authentication Header-------------------------------
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1MDM3MTQzLCJpYXQiOjE2NTMwMzcxNDMsImp0aSI6ImJkNjdlMzNmNjE3YzQ2NDI4NWUyNDU2YTkxMDI3NzQ0IiwidXNlcl9pZCI6MX0.FCHJiiWiW7s8kTW-h1wKen43dx-wyPN2YS7MUb23D_o"

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};

//Proxy URL to bypass Cors
const prox = "https://kissasian1988.herokuapp.com/"
//----------------------------------------------------





//------------Get Ouders----------------------------
const getOrders = (orders) => ({
    type: types.GET_ORDERS,
    payload: orders,
})


//------------Post Ouders----------------------------
const ordersAdd = () => ({
    type: types.ADD_ORDERS,
})

//------------Put Ouders----------------------------
const ordersUpdate = () => ({
    type: types.UPDATE_ORDERS,
})

//------------Delete Ouders----------------------------

const ordersDelete = () => ({
    type: types.DELETE_ORDERS,
})


//------------Api Call Get Products----------------------------
export const loadOrders = () => {
    return function (dispatch) {
        axios.get(`${prox}https://merak-test.herokuapp.com/inventory/order/`, {headers: headers}).then((res) => {
            dispatch(getOrders(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const addOrders = (product) => {
    return function (dispatch) {
        axios.post(`${prox}https://merak-test.herokuapp.com/inventory/order/`, product, {headers: headers}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const deleteOrders = (uuid) => {
    return function (dispatch) {
        axios.delete(`${prox}https://merak-test.herokuapp.com/inventory/order/${uuid}/`, {headers: headers}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}




