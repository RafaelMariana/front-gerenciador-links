
import './App.css'
import { Route, RouterProvider } from 'react-router-dom'
import {router} from './pages/router'


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
