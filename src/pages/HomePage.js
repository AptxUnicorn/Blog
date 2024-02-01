import React from 'react';
import Body from "../components/Body"
import RightSideBarContent from '../components/RightSideBarContent';

const HomePage = () => {

    const page = {
        lcontent: "COMING SOON", rcontent: < RightSideBarContent />, maincontent: "COMING SOON"
    }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;