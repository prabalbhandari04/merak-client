import {combineReducers} from 'redux';
import { productReducer } from './productReducer';
import {orderReducar} from './orderReducer'

const reducers = combineReducers({
    allProducts: productReducer,

})

export default reducers;