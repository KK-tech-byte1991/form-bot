

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
import { Toaster } from 'sonner';
import Settings from './pages/settings';
import TypeBot from './pages/typebot';

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
    element: <ProtectedRoute Component={Dashboard} />
  }, {
    path: "/settings",
    element: <ProtectedRoute Component={Settings} />
  },
  {
    path:"/typebot/:id/:folderId",
    element:<ProtectedRoute Component={TypeBot}/>
  }
]);
function App() {


  return (
    <AuthProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
