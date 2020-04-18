import {createStore, applyMiddleware} from 'redux'; //use redux middleware to respond to and modify state change
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import appReducer from './reducers';

const store = createStore(appReducer, applyMiddleware(promise, logger));

export default store;
