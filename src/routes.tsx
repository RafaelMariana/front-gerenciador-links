import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/signin";

export const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SignIn/>,
  },
  {
    path: '/',
    element: <h1>Hi!!</h1>,
  },

])