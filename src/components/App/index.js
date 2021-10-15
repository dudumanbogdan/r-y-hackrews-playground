import { connect } from 'react-redux'
import actions from '../../store/story/actions'
import App from './App'
import { hasMoreStoriesSelector } from '../../store/story/selectors'

const mapStateToProps = state => ({
    stories: state.story.stories,
    page: state.story.page,
    storyIds: state.story.storyIds,
    isFetching: state.story.isFetching,
    hasMoreStories: hasMoreStoriesSelector(state)
});

const mapDispatchProps = dispatch => ({
    fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page })),
    fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
})

export default connect(mapStateToProps, mapDispatchProps)(App);