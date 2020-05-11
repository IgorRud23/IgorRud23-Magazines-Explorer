import {createStore, applyMiddleware, compose} from 'redux'; //use redux middleware to respond to and modify state change
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import appReducer from './reducers';

//const store = createStore(appReducer, applyMiddleware(promise, logger));


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(appReducer, composeEnhancers(
    applyMiddleware(promise, logger, thunk)
  ));

export default store;
