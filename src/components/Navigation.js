import React from 'react';
import { NavLink } from 'react-router-dom';
import Context from './Context';
import { useContext } from 'react';

const Navigation = () => {

    const { theme } = useContext(Context);

    const boxColorCss = (index) => {
        return {
            backgroundColor: theme[index].color,
        };
    }

    const letterColorCss = (index) => {
        return {
            color: theme[index].color,
        };
    }

    return (
        <div>
            <div className="navbar" style={boxColorCss(4)} >
                <ul>
                    <NavLink to="/accueil" style={letterColorCss(0)} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>ACCUEIL</li>
                    </NavLink>
                    <NavLink to="/about" style={letterColorCss(0)} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A PROPOS</li>
                    </NavLink>
                    <NavLink to="/gallery" style={letterColorCss(0)} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>GALLERY</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};


export default Navigation;