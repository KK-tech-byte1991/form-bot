

import './App.css'
import Landing from './pages/landingPage'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Login from './pages/Login/login';
import SignUp from './pages/signUp/signUp';
import Dashboard from './pages/dashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signUp",
    element: <SignUp />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);
function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
