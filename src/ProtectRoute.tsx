
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';




const ProtectedRoute = ({ Component }: any) => {
    const { isAuthenticated } = useAuth();
    
    return isAuthenticated ? <Component /> : <Navigate to="/login" />  

};

export default ProtectedRoute;
