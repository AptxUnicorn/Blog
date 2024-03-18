import React from 'react';
import Body from "../components/Body";
import RightSideBarContent from '../components/RightSideBarContent';
import LeftSideBarContent from '../components/LeftSideBarContent';
import GalleryContent from '../components/GalleryContent';

const Photos = () => {

    const page = { lcontent: <LeftSideBarContent text="Cette page est celle où je montre mes photos et captures d'écrans." />, rcontent: < RightSideBarContent />, maincontent: <GalleryContent /> }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default Photos;