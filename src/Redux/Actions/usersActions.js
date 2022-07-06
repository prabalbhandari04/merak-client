import * as types from "../Constants/action-types";
import axios from "axios";

//Authentication Header-------------------------------
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1MDM3MTQzLCJpYXQiOjE2NTMwMzcxNDMsImp0aSI6ImJkNjdlMzNmNjE3YzQ2NDI4NWUyNDU2YTkxMDI3NzQ0IiwidXNlcl9pZCI6MX0.FCHJiiWiW7s8kTW-h1wKen43dx-wyPN2YS7MUb23D_o"

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};



//------------Get Users----------------------------
const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})


//------------Post Users----------------------------
const usersCreated = (tokens) => ({
    type: types.CREATE_USERS,
    // payload: tokens
})

//------------Put Users----------------------------
const usersLogin = (tokens) => ({
    type: types.LOGIN_USERS,
    // payload: tokens
})

//------------Post Customer----------------------------
const customerAdded = () => ({
    type: types.ADD_CUSTOMER,
})



//------------Api Call Get Products----------------------------
export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/user/profile`, {headers: headers}).then((res) => {
            dispatch(getUsers(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const createUsers = (user) => {
    return function (dispatch) {
        axios.post(`https://merak-test.herokuapp.com/user/auth/register/`, user).then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            dispatch(usersCreated());
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Update Products----------------------------
export const loginUsers = (credential) => {
    return async function (dispatch) {
        await axios.post(`https://merak-test.herokuapp.com/user/auth/login/`, credential).then((res) => {
            localStorage.setItem('access_token', res.data.refresh);
            localStorage.setItem('refresh_token', res.data.refresh);
            dispatch(usersLogin(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Register customers----------------------------
export const addCustomer = (customer) => {
    return function (dispatch) {
        axios.post(`https://merak-test.herokuapp.com/inventory/product/`, customer, {headers: headers}).then((res) => {
            dispatch(customerAdded());
        }).catch((err) => console.log(err));
    }
}