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
const usersCreated = () => ({
    type: types.CREATE_USERS,
})

//------------Put Users----------------------------
const usersLogin = (tokens) => ({
    type: types.LOGIN_USERS,
    payload: tokens
})



//------------Api Call Get Products----------------------------
export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.herokuapp.com/user/`, {headers: headers}).then((res) => {
            dispatch(getUsers(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const createUsers = (user) => {
    return function (dispatch) {
        axios.post(`https://merak-test.herokuapp.com/user/auth/register/`, user).then((res) => {
            dispatch(usersCreated());
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Update Products----------------------------
export const loginUsers = (credential) => {
    return function (dispatch) {
        axios.post(`https://merak-test.herokuapp.com/user/auth/login/`, credential).then((res) => {
            dispatch(usersLogin(res.data));
        }).catch((err) => console.log(err));
    }
}
