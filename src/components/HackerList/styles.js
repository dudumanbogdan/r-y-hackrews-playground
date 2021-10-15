import styled from "styled-components";

export const HackerListWrapper = styled.ul`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 0;
`;