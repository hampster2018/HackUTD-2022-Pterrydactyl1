import React from 'react';
import ReactDOM from 'react-dom/client';    
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup/Signup.js';
import Info from './components/Info/Info.jsx';

const router = createBrowserRouter([
    {
    path: '/',
    element: <Info/>
    },
    {
        path: '/info',
        element: <Info/>
    },
    {
        path: '/signup',
        element: <Signup/>
    }
,])


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
