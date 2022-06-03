import * as types from "../Constants/action-types";
import axios from "axios";

//Authentication Header-------------------------------
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1MDM3MTQzLCJpYXQiOjE2NTMwMzcxNDMsImp0aSI6ImJkNjdlMzNmNjE3YzQ2NDI4NWUyNDU2YTkxMDI3NzQ0IiwidXNlcl9pZCI6MX0.FCHJiiWiW7s8kTW-h1wKen43dx-wyPN2YS7MUb23D_o"

let headers = {
        "Content-type": "application/json; charset=UTF-8;",
        "Authorization": 'Bearer ' + token
};









//------------Get Products----------------------------
const getProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products,
})


//------------Post Products----------------------------
const productAdded = () => ({
    type: types.ADD_PRODUCTS,
})

//------------Put Products----------------------------
const productUpdated = () => ({
    type: types.UPDATE_PRODUCTS,
})

//------------Delete Products----------------------------

const productDeleted = () => ({
    type: types.DELETE_PRODUCTS,
})


//------------Post Variants (do not touch)----------------------------
const variantAdded = () => ({
    type: types.ADD_VARIANTS,
})


//------------Get Variants----------------------------
const getVariants = (variants) => ({
    type: types.GET_VARIANTS,
    payload: variants,
})

//------------Get Variants Field----------------------------
const getVariantsField = (variantsField) => ({
    type: types.GET_VARIANTS_FIELD,
    payload: variantsField,
})






//------------Api Call Get Products----------------------------
export const loadProducts = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.herokuapp.com/inventory/product/`, {headers: headers}).then((res) => {
            dispatch(getProducts(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const addProducts = (product) => {
    return function (dispatch) {
        axios.post(`https://merak-test.herokuapp.com/inventory/product/`, product, {headers: headers}).then((res) => {
            dispatch(productAdded());
            dispatch(loadProducts()); //post garesi update herna hoye jabe
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Update Products----------------------------
export const updateProducts = ({uuid, updated}) => {
    return function (dispatch) {
        axios.put(`https://merak-test.herokuapp.com/inventory/product/${uuid}/`, updated, {headers: headers}).then((res) => {
            dispatch(productUpdated());
            dispatch(loadProducts());
        }).catch((err) => console.log(err));
    }
}




//------------Api Call Delete Products----------------------------

export const deleteProducts = (uuid) => {
    return function (dispatch) {
        axios.delete(`https://merak-test.herokuapp.com/inventory/product/${uuid}/`, {headers: headers}).then((res) => {
            dispatch(productDeleted());
            dispatch(loadProducts());
        }).catch((err) => console.log(err));
    }

}


//------------Api Call Post Products Variant----------------------------
export const addVariants = (variant) => {
    return function (dispatch) {
        axios.post(`https://merak-test.herokuapp.com/inventory/variant/`, variant, {
            headers: {
              "Content-type": 'multipart/form-data',
              "Authorization": 'Bearer ' + token
            }
          }).then((res) => {
            dispatch(variantAdded());
            dispatch(loadProducts());
        }).catch((err) => console.log(err));
    }
}


//--------------------GET variants----------------------------

export const loadVariants = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.herokuapp.com/inventory/variant/`, {headers: headers}).then((res) => {
            dispatch(getVariants(res.data));
        }).catch((err) => console.log(err));
    }
}



//--------------------GET variants Field----------------------------

export const loadVariantsField = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.herokuapp.com/inventory/variant_field/`, {headers: headers}).then((res) => {
           dispatch(getVariantsField(res.data));
        }).catch((err) => console.log(err));
    }
}



