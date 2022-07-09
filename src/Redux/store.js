import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';


const middlewares = [reduxThunk];


const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;