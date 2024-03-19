import React from 'react';
import Body from "../components/Body";
import RightSideBarContent from '../components/RightSideBarContent';
import PaletteMapper from '../components/PaletteMapper';
import LeftSideBarContent from '../components/LeftSideBarContent';

const About = () => {

    const page = {
        lcontent: <LeftSideBarContent text="Cette page permet de modifier le theme du blog" page='1' />, rcontent: < RightSideBarContent />, maincontent: <PaletteMapper />
    }

    return (
        <div>
            <Body props={page} />
        </div >
    );
};

export default About;