import { actionTypes } from './actions';

const createInitialAppState = () => ({
    theme: 'dark'
})

const appReducer = (state = createInitialAppState(), { type, payload }) => {
    switch (type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
};

export default appReducer;