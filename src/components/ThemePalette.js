import React, { useContext } from 'react';
import Context from './Context';

const ThemePalette = (props) => {

    const { theme, setTheme } = useContext(Context);

    const handleUpdateTheme = () => {
        const updatedTheme = props.theme.map((color, index) => ({
            ...theme[index],
            color: color,
        }));
        setTheme(updatedTheme);
    }

    // Fonction utilitaire pour obtenir les styles de couleur d'une boîte spécifique dans le thème.

    const renderColorBoxes = () => {
        return props.theme.map((color, index) => (
            <div key={index} className="squarecolor" style={{ backgroundColor: color }}>
            </div>
        ));
    };

    // Rendu du composant.
    return (
        <div>
            <div onClick={handleUpdateTheme}>
                {renderColorBoxes()}
            </div>
        </div>
    );
};

// Exporte le composant ThemePalette pour qu'il puisse être utilisé ailleurs dans l'application.
export default ThemePalette;