import { connect } from 'react-redux'
import actions from '../../store/story/actions'
import App from './App'

const mapStateToProps = state => ({
    stories: state.story.stories,
    page: state.story.page,
    storyIds: state.story.storyIds,
    isFetching: state.story.isFetching
});

const mapDispatchProps = dispatch => ({
    fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds())
})

export default connect(mapStateToProps, mapDispatchProps)(App);