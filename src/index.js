import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Details from "./components/Details";
import { LoadScript } from '@react-google-maps/api';
// import Redirect from './components/Redirect';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/*",
    element: <Details />,
  },
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/details",
    element: <App />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <LoadScript
        googleMapsApiKey={ process.env.REACT_APP_MAPS_KEY }>
    </LoadScript>
  </React.StrictMode>
);

reportWebVitals();
