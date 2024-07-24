

import './App.css'
import Landing from './pages/landingPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/login';
import SignUp from './pages/signUp/signUp';
import Dashboard from './pages/dashBoard';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectRoute';

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
    element: <ProtectedRoute  Component={Dashboard} />
  }
]);
function App() {


  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
