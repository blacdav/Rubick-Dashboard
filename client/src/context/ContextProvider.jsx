// import React from 'react'
import { ThemeProvider } from "./Theme"
import { AuthProvider } from "./Auth"
import { SidebarProvider } from "./Sidebar"

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <SidebarProvider>
                    { children }
                </SidebarProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

// export default ContextProvider
