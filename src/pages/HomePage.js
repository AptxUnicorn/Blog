import React from 'react';
import Body from "../components/Body"
import RightSideBarContent from '../components/RightSideBarContent';
import LeftSideBarContent from '../components/LeftSideBarContent';

const HomePage = () => {

    const page = {
        lcontent: <LeftSideBarContent text="Voici la page d'accueil du blog" />, rcontent: < RightSideBarContent />, maincontent: "COMING SOON"
    }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;