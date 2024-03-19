import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from './Context';

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
        <div style={boxColorCss(2)}>
            <div className="navbar" style={boxColorCss(4)} >
                <ul>
                    <NavLink to="/Blog/Mainpage" style={letterColorCss(0)} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>ACCUEIL</li>
                    </NavLink>
                    <NavLink to="/Blog/About" style={letterColorCss(0)} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A PROPOS</li>
                    </NavLink>
                    <NavLink to="/Blog/gallery" style={letterColorCss(0)} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>GALLERY</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};


export default Navigation;