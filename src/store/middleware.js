import { applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'


const middlewareList = [];

middlewareList.push(thunk);
middlewareList.push(createLogger());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(...middlewareList))

export default middlewares;