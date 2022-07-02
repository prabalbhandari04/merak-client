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


const getTeams = (teams) => ({
    type: types.GET_TEAMS,
    payload: teams,
})

const teamsAdded = () => ({
    type: types.ADD_TEAMS,
})


// ------------Put Teams----------------------------
const teamUpdated = () => ({
    type: types.UPDATE_TEAMS,
})


const teamDeleted = () => ({
    type: types.DELETE_TEAMS,
})

const errorOrganization = (errorMessageOrganization) => ({
    type: types.SET_ERROR_ORGANIZATION,
    payload: errorMessageOrganization,
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
    return async function (dispatch) {
        await axios.post(`https://merak-test.onrender.com/user/organization/`, organization, {headers: headers}).then((res) => {
            dispatch(organizationsAdded());
            dispatch(errorOrganization(''));
        }).catch((err) => {
            const errorMessageOrganization = err.response.data.detail;
            const errorMessage = err.response.data.message;

            if (errorMessageOrganization !== undefined) {
                dispatch(errorOrganization(errorMessageOrganization)); //error handling for unverified email
            } else {
                dispatch(errorOrganization(errorMessage)); //for verified email
            }
        });
    }
}



//------------Api Call Teams----------------------------


export const loadTeams = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/user/team/`, {headers: headers}).then((res) => {
            dispatch(getTeams(res.data));
        }).catch((err) => console.log(err.response.data));

    }
}


export const addTeams = (team) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/user/team/`, team, {headers: headers}).then((res) => {
            dispatch(teamsAdded());
            dispatch(loadTeams());
            dispatch(errorOrganization(''));
        }).catch((err) => {
            const errorMessage = err.response.data.members;
            dispatch(errorOrganization(errorMessage));
        });
}
}


export const updateTeams = ({id, data}) => {
    return function (dispatch) {
        axios.put(`https://merak-test.onrender.com/user/team/${id}/`, data, {headers: headers}).then((res) => {
            dispatch(teamUpdated());
            dispatch(loadTeams());
        }).catch((err) => console.log(err));
    }
}


export const deleteTeams = (id) => {
    return function (dispatch) {
        axios.delete(`https://merak-test.onrender.com/user/team/${id}/`, {headers: headers}).then((res) => {
            dispatch(teamDeleted());
            dispatch(loadTeams());
        }).catch((err) => console.log(err));
    }

}