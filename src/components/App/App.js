import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';
import { Title, Wrapper } from './styles'
import HackerList from '../HackerList/HackerList'
import Loader from '../Loader/Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {

  componentDidMount() {
    document.body.style = `background-color: ${colorsDark.background};`;
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStories } = this.props;

    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>
              Hacker news reader - playground
            </Title>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible'
              }}
            >
              <HackerList stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
