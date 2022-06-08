import {combineReducers} from 'redux';
import { productsReducers } from './productsReducers';
import { ordersReducers } from './ordersReducers';
import { usersReducers } from './usersReducers'

const reducers = combineReducers({
    data: productsReducers,
    data1: ordersReducers,
    data2: usersReducers,
})

export default reducers;