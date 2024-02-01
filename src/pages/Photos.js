import React from 'react';
import Body from "../components/Body";
import RightSideBarContent from '../components/RightSideBarContent';

const Photos = () => {

    const page = { lcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar tincidunt turpis maximus pretium. Pellentesque est odio, congue vitae mauris sit amet, euismod feugiat eros. Donec vestibulum at urna a hendrerit. Vestibulum libero tellus, efficitur at volutpat at, accumsan maximus nisl. Fusce a tellus sapien. Praesent in consequat ipsum. Integer ante mauris, viverra vel sollicitudin a, pharetra non tellus. Duis blandit nisl lorem, et faucibus mauris scelerisque a. Fusce ac vestibulum lacus. Donec venenatis pulvinar libero, in luctus nisl ultricies nec. Sed lectus quam, commodo eu nisi sed, efficitur pulvinar arcu.", rcontent: < RightSideBarContent />, maincontent: "woah" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default Photos;