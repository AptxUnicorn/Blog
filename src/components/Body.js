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

    const headerColorCss = (index) => {
        return {
            backgroundColor: theme[index].color,
            color: theme[index + 2].color,
        }
    }

    return (
        <div>
            <div className='container' style={boxColorCss(2)}>
                <div className='header' style={headerColorCss(0)}>
                    <h1> BLOG </h1>
                </div>
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