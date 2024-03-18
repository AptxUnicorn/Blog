import React, { useContext } from 'react';
import Navigation from "./Navigation";
import Context from './Context';

const Body = ({ props }) => {

    const { theme } = useContext(Context);

    const boxColorCss = (index) => {
        return {
            backgroundColor: theme[index].color,
        };
    }

    return (
        <div>
            <div className='container' style={boxColorCss(2)}>
                <div className='header'></div>
                <Navigation />
                <div className='flex' style={boxColorCss(2)}>
                    <div className='main' style={boxColorCss(1)}>
                        {props.maincontent}
                    </div>
                    <aside id='rightSidebar' className='sidebar' style={boxColorCss(0)}>
                        {props.rcontent}
                    </aside>
                    <aside id='leftSidebar' className='sidebar' style={boxColorCss(0)}>
                        {props.lcontent}
                    </aside>
                </div>
            </div>
        </div >
    );
};

export default Body;