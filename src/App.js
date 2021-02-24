import React from 'react';
import Router from '../src/router/Router';
import { AppContainer } from '../src/global/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;