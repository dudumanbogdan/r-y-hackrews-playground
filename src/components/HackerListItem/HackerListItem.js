import { CommentLink, Description, ExternalLink, Host, Item, Title } from './styles'
import getSiteHostname from '../../utils/getSiteHostname'
import getArticleLink, { HN_ITEM, HN_USER } from '../../utils/getArticleLink'
import * as timeago from 'timeago.js'

const LINK_REL = 'noopener noreferrer nofollow';

const HackerListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
    const site = getSiteHostname(url) || 'new.ycombinator.com';
    const link = getArticleLink({ url, id });
    const commentUrl = `${HN_ITEM}${id}`;
    const userUrl = `${HN_USER}${by}`;

    return (
        <Item>
            <ExternalLink
                href={link}
                rel={LINK_REL}
                target="_blank">
                <Title>
                    {title} <Host>({site})</Host>
                </Title>
            </ExternalLink>
            <Description>
                {score} points by {' '}
                <CommentLink
                    href={userUrl}
                    rel="'noopener"
                    target="_blank"
                >{by}</CommentLink>{' '}
                {timeago.format(new Date(time * 1000).toISOString())} {' | '}
                <CommentLink
                    href={commentUrl}
                    rel="'noopener"
                    target="_blank"
                >{kids.length} comments</CommentLink>{' '}
            </Description>
        </Item>
    )
};

export default HackerListItem;