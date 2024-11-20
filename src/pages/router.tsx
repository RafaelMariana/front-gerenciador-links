import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./dashboard";
import Register from "./register"
import Login from "./login"

export const router = createBrowserRouter([
    {
    path: '/',
    element: <Dashboard/>
    },

    {
        path: '/register',
        element:<Register/>
    },

    {
        path: '/login',
        element:<Login/>
    }

])