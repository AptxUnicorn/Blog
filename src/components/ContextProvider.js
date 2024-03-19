import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {

    const [theme, setTheme] = useState([
        { id: 0, name: 'color1', color: "#0d0f36" },
        { id: 1, name: 'color2', color: "#294380" },
        { id: 2, name: 'color3', color: "#69d2cd" },
        { id: 3, name: 'color4', color: "#b9f1d6" },
        { id: 4, name: 'color5', color: "#f1f6ce" },
    ]);

    return (
        <Context.Provider value={{ theme, setTheme }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider