import React, { useContext } from 'react';
import Context from './Context';

const LeftSideBarContent = (props) => {

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
        }
    }

    return (
        <div>
            <div className='boxing' style={boxColorCss(4)}>
                <p style={letterColorCss(0)}> {props.text} </p>
            </div>

            {props.page === '1' && (
                <div className='boxing' style={boxColorCss(4)}>
                    <p style={letterColorCss(0)}> La police du Blog est <a href="https://www.dafont.com/fr/ethnocentric.font" style={letterColorCss(1)}>Ethnocentric</a> </p>
                </div>
            )}
            <div className='picsou' style={boxColorCss(4)}>

            </div>
        </div >
    );
};

export default LeftSideBarContent;