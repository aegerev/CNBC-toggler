import {createContext, useState} from 'react';

let ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isLight, setIsLight] = useState(true);

    function toggleTheme() {
        setIsLight(!isLight);
        console.log("changing theme to Evening");
    }

    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;

