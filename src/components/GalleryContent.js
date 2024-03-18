import React, { useContext } from 'react';
import Context from './Context';

const GalleryContent = () => {

    const { theme } = useContext(Context);

    const boxColorCss = (index) => {
        return {
            backgroundColor: theme[index].color,
            scrollbarColor: `${theme[index - 2].color} ${theme[index + 1].color}`,
        };
    }

    return (
        <div className='wrapper'>
            <div className='selector' style={boxColorCss(2)}>

            </div>
            <div className='selector' style={boxColorCss(2)}>

            </div>
        </div>
    );
};

export default GalleryContent;