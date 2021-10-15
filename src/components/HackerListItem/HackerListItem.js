import { CommentLink, Description, ExternalLink, Host, Item, Title } from './styles'
const LINK_REL = 'noopener noreferrer nofollow';


const HackerListItem = () => {
    return (
        <Item>
            <ExternalLink
                href="https://gitconnected.com"
                rel={LINK_REL}
                target="_blank">
                <Title>
                    The developer community <Host>(gitconnected.com)</Host>
                </Title>
            </ExternalLink>
            <Description>
                9000 points by {' '}
                <CommentLink
                    href="#"
                    rel="'noopener"
                    target="_blank"
                >Test user</CommentLink>{' '}
                1 Hour Ago {' | '}
                <CommentLink
                    href="#"
                    rel="'noopener"
                    target="_blank"
                >42 comments</CommentLink>{' '}
            </Description>
        </Item>
    )
};

export default HackerListItem;