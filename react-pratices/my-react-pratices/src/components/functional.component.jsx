import React from "react";
import '../App.css';
import { useTheme, useThemeUpdate, } from "../theme/themeContext";

export function MyFunctionalComponent() {
    const theme = useTheme()
    const changeToDarkTheme = useThemeUpdate()
    const color = '#222222'

    console.log("theme:", changeToDarkTheme)
    return (
        <>
            <button onClick={changeToDarkTheme}>toggle</button>
            <div className="functional-component" style={{ backgroundColor: theme ? color : 'white' }}>
                Functional Component
            </div>
        </>
    )
}