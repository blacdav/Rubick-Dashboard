import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    // const login = (isAuth) => {
    //     setIsAuth(isAuth);
    // }

    const logout = (isAuth) => {
        setIsAuth(isAuth);
    }

    return (
        <AuthContext.Provider value={{ isAuth, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}