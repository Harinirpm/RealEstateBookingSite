import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import './index.css'
import routes from './router/Routes';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    {routes.map((route,index) => (
     <Route key={index} path={route.path} element={route.element} />
    ))}
  </Routes>
  </BrowserRouter>
)
