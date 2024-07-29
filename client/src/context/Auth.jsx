import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    // const url = import.meta.env.VITE_GOOGLE_URL;

    const signin = (users) => {
        setUser(users);
        setIsAuth(user);
        navigate('/home', { replace: true });
    }

    // const signinProfile = async () => {
    //     try {
    //         const res = await fetch(url, {
    //             headers: {
    //                 'Authorization': ``,
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         if(!res.ok) {
    //             throw new Error('Network response was not ok')
    //         }
    //         const data = await res.json();
    //         setUser(data)
    //     } catch (error) {
            
    //     }
    // }

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

    const getGoogleProfile = async () => {
        const res = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${isAuth.access_token}`, {
            headers: {
                'Authorization': `Bearer ${isAuth.access_token}`,
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json();
        setUser(data)
    }

    useEffect(() => {
        if(isAuth.access_token){
            getGoogleProfile();
        }
    }, [isAuth.access_token])

    return (
        <AuthContext.Provider value={{ isAuth, googleLogin, /* signin, */ user, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}