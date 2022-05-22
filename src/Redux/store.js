import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './Reducers/index';


const middlewares = [reduxThunk];


const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;