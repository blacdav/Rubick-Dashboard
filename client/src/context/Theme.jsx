import { createContext, useContext, useState} from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)

    const light = () => {
        setTheme(theme)
    }

    return (
        <ThemeContext.Provider value={{theme, light}}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}
