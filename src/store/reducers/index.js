import { combineReducers } from "redux";
import appReducer from '../app/appReducer'

const reducers = combineReducers({
    app: appReducer
});

export default reducers;