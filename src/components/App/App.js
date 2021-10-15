import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';
import { Title } from './style'

function App() {
  return (
    <ThemeProvider theme={colorsDark}>
      <Title>
        Test
      </Title>
    </ThemeProvider>
  );
}

export default App;
