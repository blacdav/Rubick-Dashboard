import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const url = import.meta.env.VITE_GOOGLE_URL;

    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            setIsAuth(tokenResponse);
            navigate('/home');
        },
        onError: (error) => console.error(`Login Failed ${error}`)
    }, console.log(isAuth))

    const logout = () => {
        googleLogout()
        setIsAuth(null);
        setTimeout(() => {navigate('/')}, 1000)
    }

    const getUsers = async () => {
        const res = await fetch(url, {
            headers: {
                'Authorization': `${isAuth.access_token}`,
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json();
        setUser(data)
        console.log(user)
    }

    useEffect(() => {
        // if(isAuth){
            getUsers();
        // }
        // console.log(isAuth)
    }, [])

    // const login = (isAuth) => {
    //     setIsAuth(isAuth);
    // }

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, googleLogin, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}