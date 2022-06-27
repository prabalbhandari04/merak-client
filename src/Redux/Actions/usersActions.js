import * as types from "../constants/action-types";
import axios from "axios";


//Authentication Header-------------------------------
const token = localStorage.getItem('access_token')

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};



//------------Get Users----------------------------
const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})


//------------Get Single User----------------------------
const getUser = (user) => ({
    type: types.GET_USER,
    payload: user,
})


// ------------Put users----------------------------
const userUpdated = () => ({
    type: types.UPDATE_USERS,
})


// ------------Put user pass----------------------------
const passwordUpdated = () => ({
    type: types.UPDATE_USERS,
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

const errorLogin = (errorMessageLogin) => ({
    type: types.SET_ERROR_LOGIN,
    payload: errorMessageLogin,
})

const errorRegister = (errorMessageRegister) => ({
    type: types.SET_ERROR_REGISTER,
    payload: errorMessageRegister,
})









//------------Api Call Get users----------------------------
export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/user/profile`, {headers: headers}).then((res) => {
            dispatch(getUsers(res.data));
        }).catch((err) => console.log(err));

    }
}


//------------Api Call Get single user----------------------------
export const loadUser = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/user/auth/get_profile`, {headers: headers}).then((res) => {
            dispatch(getUser(res.data));
        }).catch((err) => console.log(err));

    }
}




//------------Api Call Post Products----------------------------
export const createUsers = (user) => {
    
    return async function (dispatch) {
        await axios.post(`https://merak-test.onrender.com/user/auth/register/`, user).then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            dispatch(usersCreated());
            dispatch(errorRegister([]));
            
        }).catch((err) => {
            const errorMessage = err.response.data;
            dispatch(errorRegister(errorMessage));
        });
    }
}



//------------Api for user profile update --------------------------

export const updateUsers = ({id, updated}) => {
    return function (dispatch) {
        axios.put(`https://merak-test.onrender.com/user/profile/${id}/`, updated, {headers: headers}).then((res) => {
            dispatch(userUpdated());
            dispatch(getUsers(res.data));
        }).catch((err) => console.log(err));
    }
}




//------------Api for user password update --------------------------

export const updatePassword = ({id, updated}) => {
    return function (dispatch) {
        axios.put(`https://merak-test.onrender.com/user/profile/${id}/change_password/`, updated, {headers: headers}).then((res) => {
            dispatch(passwordUpdated());
            dispatch(getUsers(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Update Products----------------------------
export const loginUsers = (credential) => {
    return async function (dispatch) {
        await axios.post(`https://merak-test.onrender.com/user/auth/login/`, credential).then((res) => {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            dispatch(usersLogin(res.data));
            dispatch(errorLogin(''));
        }).catch((err) => {
            const errorMessage = err.response.data.detail;
            dispatch(errorLogin(errorMessage));
        });
    }
}

