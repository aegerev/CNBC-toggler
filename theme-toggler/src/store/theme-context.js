import {createContext, useState} from 'react';

let ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isYellow, setIsYellow] = useState(true);
    const [isOrange, setIsOrange] = useState(true);
    const [isRed, setIsRed] = useState(true);
    const [isPurple, setIsPurple] = useState(true);
    const [isBlue, setIsBlue] = useState(true);
    const [isGreen, setIsGreen] = useState(true);

    function toggleTheme() {
        setIsYellow(!isYellow);
        alert("changing color to Orange");

        setIsOrange(!isOrange);
        alert("changing color to Red");

        setIsRed(!isRed);
        alert("changing color to Purple");

        setisPurple(!isPurple);
        alert("changing color to Blue");

        setIsBlue(!isBlue);
        alert("changing color to Green");

        setIsBlue(!isBlue);
        console.log("changing color to Yellow");

    }

    return (
        <ThemeContext.Provider value={{ isYellow, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

