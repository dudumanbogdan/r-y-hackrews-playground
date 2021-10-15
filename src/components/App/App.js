import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';
import { Title, Wrapper } from './styles'
import HackerList from '../HackerList/HackerList'

function App() {
  document.body.style = `background-color: ${colorsDark.background};`;

  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>
            Hacker news reader - playground
          </Title>
          <HackerList />
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
