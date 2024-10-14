import { createRoot } from 'react-dom/client'
import {BrowserRouter, useRoutes,} from 'react-router-dom';
import './index.css'
import Routes from './router/Routes';

const AppRoutes = () => {
  const element = useRoutes(Routes);
  return element;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AppRoutes />
  </BrowserRouter>
)
