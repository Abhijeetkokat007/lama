import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import Home from './views/Home/Home';
import WidgetConfiguration from './views/WidgetConfiguration/WidgetConfiguration';
import Deployment from './views/Deployment/Deployment';
import Pricing from './views/Pricing/Pricing';
// import PopupHome from './component/popuphome';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    
  
  // {
  //     path: '/',
  //     element: <PopupHome/>
  // },
  {
    path: '/',
    element: <Home/>
},
  {
    path: '/widgetconfiguration',
    element: <WidgetConfiguration/>
},
{
  path: '/deployment',
  element: <Deployment/>
},
{
  path: '/pricing',
  element: <Pricing/>
},
  
]);

root.render( <RouterProvider router={router} /> );