import React from 'react';
import Body from "../components/Body"
import RightSideBarContent from '../components/RightSideBarContent';
import LeftSideBarContent from '../components/LeftSideBarContent';
import HomePageContent from '../components/HomePageContent';

const HomePage = () => {

    const page = {
        lcontent: <LeftSideBarContent text="Voici la page d'accueil du blog" />, rcontent: < RightSideBarContent />, maincontent: <HomePageContent />
    }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;