import axios from "axios";
import * as types from "../constants/action-types";


// Authentication Header-------------------------------
const token = localStorage.getItem('access_token')

const headers = {
        "Content-type": "application/json; charset=UTF-8;",
        "Authorization": 'Bearer ' + token
};







// ------------Get Products----------------------------
const getProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products,
})


// ------------Post Products----------------------------
const productAdded = () => ({
    type: types.ADD_PRODUCTS,
})

// ------------Put Products----------------------------
const productUpdated = () => ({
    type: types.UPDATE_PRODUCTS,
})

// ------------Delete Products----------------------------

const productDeleted = () => ({
    type: types.DELETE_PRODUCTS,
})


// ------------Post Variants ----------------------------
const variantAdded = () => ({
    type: types.ADD_VARIANTS,
})


// ------------Get Variants----------------------------
const getVariants = (variants) => ({
    type: types.GET_VARIANTS,
    payload: variants,
})

// ------------Get Variants Field----------------------------
const getVariantsField = (variantsField) => ({
    type: types.GET_VARIANTS_FIELD,
    payload: variantsField,
})

// ------------Post Variants ----------------------------
const variantFieldsAdded = () => ({
    type: types.ADD_VARIANTS_FIELD,
})







//------------Api Call Get Products----------------------------
export const loadProducts = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/product/`, {headers: headers}).then((res) => {
            dispatch(getProducts(res.data));
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Post Products----------------------------
export const addProducts = (product) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/inventory/product/`, product, {headers: headers}).then((res) => {
            dispatch(productAdded());
            dispatch(loadProducts()); //post garesi update herna hoye jabe
            dispatch(loadVariantsField());
            dispatch(loadVariants());
        }).catch((err) => console.log(err));
    }
}


//------------Api Call Update Products----------------------------
export const updateProducts = ({uuid, updated}) => {
    return function (dispatch) {
        axios.put(`https://merak-test.onrender.com/inventory/product/${uuid}/`, updated, {headers: headers}).then((res) => {
            dispatch(productUpdated());
            dispatch(loadProducts());
        }).catch((err) => console.log(err));
    }
}




//------------Api Call Delete Products----------------------------

export const deleteProducts = (uuid) => {
    return function (dispatch) {
        axios.delete(`https://merak-test.onrender.com/inventory/product/${uuid}/`, {headers: headers}).then((res) => {
            dispatch(productDeleted());
            dispatch(loadProducts());
        }).catch((err) => console.log(err));
    }

}


//------------Api Call Post Products Variant----------------------------
export const addVariants = (variant) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/inventory/variant/`, variant, {
            headers: {
              "Content-type": 'multipart/form-data',
              "Authorization": 'Bearer ' + token
            }
          }).then((res) => {
            dispatch(variantAdded());
            dispatch(loadProducts());
            dispatch(loadVariants());
            dispatch(loadVariantsField());
        }).catch((err) => console.log(err));
    }
}


//--------------------GET variants----------------------------

export const loadVariants = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/variant/`, {headers: headers}).then((res) => {
            dispatch(getVariants(res.data));
        }).catch((err) => console.log(err));
    }
}



//--------------------GET variants Field----------------------------

export const loadVariantsField = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/variant_field/`, {headers: headers}).then((res) => {
           dispatch(getVariantsField(res.data));
        }).catch((err) => console.log(err));
    }
}


//--------------------POST variants Field----------------------------
export const addVariantsField = (variant) => {
    return function (dispatch) {
        axios.post(`https://merak-test.onrender.com/inventory/variant_field/`, variant, {headers: headers}).then((res) => {
            dispatch(variantFieldsAdded());
            dispatch(loadProducts());
            dispatch(loadVariants());
            dispatch(loadVariantsField());
        }).catch((err) => console.log(err));
    }
}


