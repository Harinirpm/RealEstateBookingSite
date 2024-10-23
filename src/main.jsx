import { createRoot } from 'react-dom/client'
import {BrowserRouter, useRoutes,} from 'react-router-dom';
import './index.css'
import Routes from './router/Routes';
import { createTheme,ThemeProvider } from '@mui/material';
// import { Provider } from 'react-redux';
// import { store } from './store/Store';

const theme = createTheme({
  typography:{
      fontFamily:"Nunito Sans",
  },
})

const AppRoutes = () => {
  const element = useRoutes(Routes);
  return element;
};

const root = createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <AppRoutes />
  </ThemeProvider>
  </BrowserRouter>
  // </Provider>
)
