import { createContext, useContext, useState } from 'react'
import { useAuth } from './Auth';

const GoogleContext = createContext();

// eslint-disable-next-line react/prop-types
export const GoogleProvider = ({ children }) => {
    const { logout } = useAuth();

    const google = useGoogle({
        onSuccess: async (tokenResponse) => {
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: '',
                    },
                });
                // setUser(userInfoResponse.data);
                setUser(true);
            } catch (error) {
                console.error('Error fetching user info: ', error);
            }
        },
        onError: (errorResponse) => {
            console.error('Login failed: ', errorResponse);
        }
    })

    return (
        <GoogleContext.Provider value={{ logout, google }}>
            { children }
        </GoogleContext.Provider>
    )
}

export const useGoogle = () => {
    return useContext(GoogleContext);
}