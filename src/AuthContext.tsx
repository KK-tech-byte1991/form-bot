import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  const login = (userDetails: any) => {
    localStorage.setItem('authToken', userDetails.token);
    let withoutToken = JSON.parse(JSON.stringify(userDetails))
    delete withoutToken.token
    localStorage.setItem("userDetails", JSON.stringify(withoutToken))
    setIsAuthenticated(true);

  }
  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  }



  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};