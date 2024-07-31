import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: (userDetails: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = (userDetails: any) => {
    localStorage.setItem('authToken', userDetails.token);
    const withoutToken = JSON.parse(JSON.stringify(userDetails))
    delete withoutToken.token
    console.log("withoutToken", withoutToken)
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
