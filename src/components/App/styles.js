import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    overflow: hidden;
    width: 85%;
    padding-bottom: 100px;
`;

export const Title = styled.h1`
    color: ${props => props.theme.textSecondary};
    font-size: 20px;
    font-weight: 300;
    margin-top: 24px;
    margin-bottom: 24px;
`;

