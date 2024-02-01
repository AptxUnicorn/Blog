import React from 'react';
import Body from "../components/Body";
import RightSideBarContent from '../components/RightSideBarContent';
import PaletteMapper from '../components/PaletteMapper';

const About = () => {

    const page = { lcontent: "Cette page vous permet de modifier le theme du blog", rcontent: < RightSideBarContent />, maincontent: <PaletteMapper /> }

    return (
        <div>
            <Body props={page} />
        </div >
    );
};

export default About;