import React from 'react';
import Body from "../components/Body";
import RightSideBarContent from '../components/RightSideBarContent';
import LeftSideBarContent from '../components/LeftSideBarContent';

const Photos = () => {

    const page = { lcontent: <LeftSideBarContent text="Cette page est celle où je montre mes photos et captures d'écrans." />, rcontent: < RightSideBarContent />, maincontent: "woah" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default Photos;