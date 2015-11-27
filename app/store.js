import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));
export default store;
