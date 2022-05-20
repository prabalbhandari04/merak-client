import {combineReducers} from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    allORders: orderReducer
})

export default reducers;