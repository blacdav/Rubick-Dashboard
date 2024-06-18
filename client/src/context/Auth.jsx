import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null)

    const login = (isAuth) => {
        setIsAuth(isAuth);
    }

    const logout = () => {
        setIsAuth(null);
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}