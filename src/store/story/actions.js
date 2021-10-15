import hackerNewsApi from "../../services/hackerNewsApi";

const NS = 'hackernews-playground/story';

export const actionTypes = {
    FETCH_STORY_IDS_REQUEST: `${NS}/FETCH_STORY_IDS_REQUEST`,
    FETCH_STORY_IDS_SUCCESS: `${NS}/FETCH_STORY_IDS_SUCCESS`,
    FETCH_STORY_IDS_FAILURE: `${NS}/FETCH_STORY_IDS_FAILURE`,
    FETCH_STORIES_IDS_REQUEST: `${NS}/FETCH_STORIES_IDS_REQUEST`,
    FETCH_STORIES_IDS_SUCCESS: `${NS}/FETCH_STORIES_IDS_SUCCESS`,
    FETCH_STORIES_IDS_FAILURE: `${NS}/FETCH_STORIES_IDS_FAILURE`,
};

const action = (type, payload) => ({ type, payload });

const actions = {
    fetchStoryIds: (payload = {}) => {
        return dispatch => {
            dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST, payload));

            return hackerNewsApi.getTopStoriesId()
                .then(storyIds => {
                    dispatch(action(actionTypes.FETCH_STORY_IDS_SUCCESS, { storyIds }));
                    dispatch(actions.fetchStories({ storyIds, page: 0 }));

                    return storyIds;
                }).catch(err => dispatch(action(actionTypes.FETCH_STORY_IDS_FAILURE, err)))
        }
    },
    fetchStories: (payload = {}) => {
        return dispatch => {
            dispatch(action(actionTypes.FETCH_STORIES_IDS_REQUEST, payload));

            const { storyIds, page } = payload;

            return hackerNewsApi.getStoriesByPage(storyIds, page)
                .then(stories => dispatch(action(actionTypes.FETCH_STORIES_IDS_SUCCESS, stories)))
                .catch(err => dispatch(action(actionTypes.FETCH_STORIES_IDS_FAILURE, err)))

        }
    }
}

export default actions;