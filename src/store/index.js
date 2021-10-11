import { createStore } from "redux"
import reducers from './reducers'
import middleware from './middleware'

const configureStore = (initialState) => {
    const store = createStore(reducers, initialState, middleware);

    return store;
}

export default configureStore;