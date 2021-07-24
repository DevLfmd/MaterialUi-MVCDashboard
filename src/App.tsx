import React from 'react';
import { useRedux } from './hooks/useRedux';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

import routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme/index';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  const { useAppSelector } = useRedux();

  const loggedIn = useAppSelector((state: any) => state.auth.loggedIn) || localStorage.getItem('token') != null ? true : false;
  const routing = useRoutes(routes(loggedIn));

  return (
    <React.Fragment>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
