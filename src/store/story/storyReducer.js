import { actionTypes } from './actions'

const createInitialState = () => ({
    storyIds: [],
    stories: [],
    page: 0,
    isFetching: false,
    error: ''
})

const storyReducer = (state = createInitialState(), { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_STORY_IDS_REQUEST:
        case actionTypes.FETCH_STORIES_IDS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case actionTypes.FETCH_STORY_IDS_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case actionTypes.FETCH_STORIES_IDS_SUCCESS:
            return {
                ...state,
                stories: [...state.stories, ...payload.stories],
                page: state.page + 1,
                isFetching: false
            }
        default:
            return state;
    }
}

export default storyReducer;