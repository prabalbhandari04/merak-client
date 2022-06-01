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





//------------Get Products----------------------------
const getOrders = (orders) => ({
    type: types.GET_ORDERS,
    payload: orders,
})


//------------Post Products----------------------------
const productOrders = () => ({
    type: types.ADD_PRODUCTS,
})


//------------Post Variants----------------------------
// const variantAdded = () => ({
//     type: types.ADD_VARIANTS,
// })


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


// //------------Api Call Post Products Variant----------------------------
// export const addVariants = (variant) => {
//     return function (dispatch) {
//         axios.post(`${prox}https://merak-test.herokuapp.com/inventory/variant/`, variant, {headers: headers}).then((res) => {
//             dispatch(variantAdded());
//             dispatch(loadProducts());
//         }).catch((err) => console.log(err));
//     }
// }



