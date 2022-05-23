import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const BurgerLink = ({ onClick, name, text, routeName }) => {
    return (
        <li className={name}><Link onClick={onClick} className={routeName} to="/catalog">{text}</Link></li>
    );
};

BurgerLink.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default BurgerLink;