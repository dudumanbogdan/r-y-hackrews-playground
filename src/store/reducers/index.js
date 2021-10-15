import { combineReducers } from "redux";
import appReducer from '../app/appReducer'
import storyReducer from "../story/storyReducer";

const reducers = combineReducers({
    app: appReducer,
    story: storyReducer
});

export default reducers;