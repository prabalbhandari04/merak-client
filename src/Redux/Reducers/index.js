import {combineReducers} from 'redux';
import { productsReducers } from './productsReducers';
import { ordersReducers } from './ordersReducers';

const reducers = combineReducers({
    data: productsReducers,
    data: ordersReducers

})

export default reducers;