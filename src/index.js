import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map/Map.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Map/>
    },
    {
        path: '/Map',
        element: <Map/>
    }
,])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
