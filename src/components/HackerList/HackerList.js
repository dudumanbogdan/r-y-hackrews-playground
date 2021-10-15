import HackerListItem from '../HackerListItem/HackerListItem';
import { HackerListWrapper } from './styles'

const HackerList = ({ stories }) => {
    return (
        <HackerListWrapper>
            {stories.map(story =>
                <HackerListItem key={story.id} {...story} />)}
        </HackerListWrapper>
    )
}

export default HackerList;