import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/signin";
import AuthenticationLayout  from "./pages/layouts/authentication"
import path from "path";

export const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SignIn/>,
  },
  {
    path: '/',
    element: <h1>Hi!!</h1>,
  },
  {
    path: '/',
    element:<AuthenticationLayout/>,
    children:[
      {
       path: '/sign-in',
       element: <SignIn/>,
      
      }
     
      
    ]
  }

])