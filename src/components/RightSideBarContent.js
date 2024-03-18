import React, { useContext } from 'react';
import Context from './Context';

const RightSideBarContent = () => {

    const { theme } = useContext(Context);

    const boxColorCss = (index) => {
        return {
            borderColor: theme[index].color,
            backgroundColor: theme[index - 2].color,
        };
    }
    const letterColorCss = (index) => {
        return {
            color: theme[index].color,
        };
    }

    return (
        <div>
            <div>
                <div className='boxing' style={boxColorCss(4)}>
                    <p style={letterColorCss(0)}> Pour plus de contenu, vous pouvez me retrouver sur github ! </p>
                </div>
                <div className='boxing' style={boxColorCss(4)}>
                    <a href="https://github.com/AptxUnicorn" style={letterColorCss(0)}> GITHUB </a>
                </div>
                <div className='boxing' style={boxColorCss(4)}>
                    <a href="https://github.com/AptxUnicorn/Blog" style={letterColorCss(0)}> REPOSITORIE </a>
                </div>
            </div>
        </div >
    );
};

export default RightSideBarContent;