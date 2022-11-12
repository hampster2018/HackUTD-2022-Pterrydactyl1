import React from 'react';
import OauthLogin from "./OauthLogin";
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
    path: '/',
    element: <OauthLogin/>
    }
,])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)