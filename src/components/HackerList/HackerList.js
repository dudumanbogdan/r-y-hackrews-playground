import HackerListItem from '../HackerListItem/HackerListItem';
import { HackerListWrapper } from './styles'

const HackerList = () => {
    return (
        <HackerListWrapper>
            <HackerListItem />
            <HackerListItem />
        </HackerListWrapper>
    )
}

export default HackerList;