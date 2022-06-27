import * as types from "../constants/action-types";
import axios from "axios";

//Authentication Header-------------------------------
const token = localStorage.getItem('access_token')

let headers = {
        "Content-type": "application/json; charset=UTF-8;",
        "Authorization": 'Bearer ' + token
};







//------------Post Organizations----------------------------

const getOrganizations = (organizations) => ({
    type: types.GET_ORGANIZATIONS,
    payload: organizations,
})


const organizationsAdded = () => ({
    type: types.ADD_ORGANIZATIONS,
})




const teamsAdded = () => ({
    type: types.ADD_TEAMS,
})




//------------Api Call Post Organizations----------------------------

export const loadOrganizations = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/user/organization/`, {headers: headers}).then((res) => {
            dispatch(getOrganizations(res.data));
        }).catch((err) => console.log(err.response.data));

    }
}


export const addOrganizations = (organization) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/user/organization/`, organization, {headers: headers}).then((res) => {
            dispatch(organizationsAdded());
        }).catch((err) => console.log(err.response.data));
    }
}



//------------Api Call Post Teams----------------------------

export const addTeams = (team) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/user/team/`, team, {headers: headers}).then((res) => {
            dispatch(teamsAdded());
        }).catch((err) => console.log(err.response.data));
}
}