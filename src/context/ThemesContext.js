"use client"

import { createContext, useState } from "react";

export const ThemesContext = createContext();

export const ThemeProvider = ({children})=>{
    const [mode, setMode] = useState('dark');

    const toggle = ()=>{
        setMode(theme => (theme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemesContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemesContext.Provider>
    )
}