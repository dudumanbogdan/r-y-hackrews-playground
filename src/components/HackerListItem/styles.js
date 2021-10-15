import styled from 'styled-components'

export const Item = styled.li`
box-sizing: border-box;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    list-style: none;
    padding: 14px 24px;

    &:last-child {
        border-bottom: none;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.text};
    margin-top: 0px;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.4px;
    `;

export const Host = styled.span`
    color: ${({ theme }) => theme.textSecondary};

    `;

export const ExternalLink = styled.a`
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    `;

export const Description = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.textSecondary};
    `;

export const CommentLink = styled.a`
color: ${({ theme }) => theme.textSecondary};
&:visited {
color: ${({ theme }) => theme.textSecondary};
}
    `;