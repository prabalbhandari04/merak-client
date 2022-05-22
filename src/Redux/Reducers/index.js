import {combineReducers} from 'redux';
import { productsReducers } from './productsReducers';

const reducers = combineReducers({
    data: productsReducers
})

export default reducers;