import React from 'react';
import { useSelector } from 'react-redux'
import Nav from './Nav';

const NavContainer = () => {
    let currentNavPage = useSelector(state => state.nav.currentNavPage)
    let links = useSelector(state => state.nav.links)
    return (
        <Nav
            currentNavPage={currentNavPage}
            links={links}
        />
    );
};

export default NavContainer;