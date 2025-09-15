"use client"
import { createContext, useState, useContext, useEffect } from "react"
export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        // Set the initial theme on the <html> tag.
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme);
        }
    }, []);

    useEffect(() => {
        // Apply the theme to the <html> tag whenever it changes.
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const themeButton = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    return(
        <>
            <ThemeContext.Provider value={{ theme, themeButton }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}