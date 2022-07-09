import {combineReducers} from 'redux';
import { productsReducers } from './productsReducers';
import { ordersReducers } from './ordersReducers';
import { usersReducers } from './usersReducers'
import {organizationReducers} from './organizationReducers';

const reducers = combineReducers({
    data: productsReducers,
    data1: ordersReducers,
    data2: usersReducers,
    data3: organizationReducers, //for organizations and teams
})

export default reducers;