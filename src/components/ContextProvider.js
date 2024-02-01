import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState([
        { id: 0, name: 'color1', color: "#d1313d" },
        { id: 1, name: 'color2', color: "#e5625c" },
        { id: 2, name: 'color3', color: "#f9bf76" },
        { id: 3, name: 'color4', color: "#8eb2c5" },
        { id: 4, name: 'color5', color: "#615375" },
    ]);

    return (
        <Context.Provider value={{ theme, setTheme }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider