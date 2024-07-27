import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    // const url = import.meta.env.VITE_GOOGLE_URL;
    const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${isAuth.access_token}`;

    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            setIsAuth(tokenResponse);
            navigate('/home', { replace: true });
        },
        onError: (error) => console.error(`Login Failed ${error}`)
    })

    const logout = () => {
        googleLogout()
        setIsAuth(null);
        setTimeout(() => {navigate('/', { replace: true })}, 1000)
    }

    const getUsers = async () => {
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${isAuth.access_token}`,
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json();
        setUser(data)
    }

    useEffect(() => {
        if(isAuth){
            getUsers();
        }
    }, [isAuth])

    // const login = (isAuth) => {
    //     setIsAuth(isAuth);
    // }

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, googleLogin, user, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}