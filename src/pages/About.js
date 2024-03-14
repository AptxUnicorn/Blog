import React from 'react';
import Body from "../components/Body";
import RightSideBarContent from '../components/RightSideBarContent';
import PaletteMapper from '../components/PaletteMapper';
import LeftSideBarContent from '../components/LeftSideBarContent';
const About = () => {

    const page = {
        lcontent: <LeftSideBarContent text="Cette page permet de modifier le theme du blog" />, rcontent: < RightSideBarContent />, maincontent: <div > <PaletteMapper /> <h2> La police du blog est <a href='https://www.dafont.com/fr/arkhip.font'> Arkhip</a> </h2></div>
    }

    return (
        <div>
            <Body props={page} />
        </div >
    );
};

export default About;