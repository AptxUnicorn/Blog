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
        };
    }

    return (
        <div>
            <div>
                <div className='boxing' style={boxColorCss(4)}>
                    <p style={letterColorCss(0)}> {props.text} </p>
                </div>
            </div>
        </div >
    );
};

export default LeftSideBarContent;