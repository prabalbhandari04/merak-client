import {combineReducers} from 'redux';
import { orderReducer } from './orderReducer';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    allOrders: orderReducer
})

export default reducers;