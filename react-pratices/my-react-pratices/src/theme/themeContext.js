import React from "react";

const ThemeContext = React.createContext('')
const ThemeUpdate = React.createContext('')

// custom hooks
export function useTheme() {
    return React.useContext(ThemeContext)
}
export function useThemeUpdate() {
    return React.useContext(ThemeUpdate)
}

export const themes = {
    cyanColor: {
        background: 'cyan',
    },
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = React.useState(false)
    function changeTheme() {
        return setDarkTheme(prevTheme => !prevTheme)
    }
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdate.Provider value={changeTheme}>

                    {children}
                </ThemeUpdate.Provider>
            </ThemeContext.Provider>
        </>
    )

}