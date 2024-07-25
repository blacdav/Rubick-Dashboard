import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return(
        <SidebarContext.Provider value={{ open, setOpen }}>
            { children }
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    return useContext(SidebarContext);
}