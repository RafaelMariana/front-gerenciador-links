
import './App.css'
import { Route, RouterProvider } from 'react-router-dom'
import {router} from './routes'


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
