import React, { useEffect, useState, useContext } from 'react';
import palettesjson from '../assets/palettes/100.json';
import ThemePalette from './ThemePalette';
import Context from './Context';

const PaletteMapper = () => {

    const { theme } = useContext(Context);

    const [data, setData] = useState([])

    useEffect(() => {
        setData(palettesjson);
    }, []);

    const boxColorCss = (index) => {
        return {
            backgroundColor: theme[index].color,
            scrollbarColor: `${theme[index - 2].color} ${theme[index + 1].color}`,
        };
    }

    return (
        <div className='selector' style={boxColorCss(2)}>
            {
                data.map((themes, index) => (
                    <div style={{ display: 'inline-block', margin: '5px' }} key={index} >
                        <ThemePalette theme={themes} />
                    </div>
                ))}
        </div>
    );
};

export default PaletteMapper;