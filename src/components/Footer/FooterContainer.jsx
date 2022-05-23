import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const FooterContainer = () => {
    let currentNavPage = useSelector(state => state.nav.currentNavPage);
    let isCatalog = false;
    if (currentNavPage === "/catalog") {
        isCatalog = true;
    }
    return (
        <Footer
            isCatalog={isCatalog}
        />
    );
};

export default FooterContainer;