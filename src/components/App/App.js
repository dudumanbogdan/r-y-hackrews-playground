import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';
import { Title, Wrapper } from './styles'
import HackerList from '../HackerList/HackerList'

class App extends Component {

  componentDidMount() {
    document.body.style = `background-color: ${colorsDark.background};`;
    this.props.fetchStoriesFirstPage();
  }

  render() {
    const { stories } = this.props;

    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>
              Hacker news reader - playground
            </Title>
            <HackerList stories={stories} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}


export default App;
