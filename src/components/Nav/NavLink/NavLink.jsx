import React from 'react';
import { Link } from 'react-router-dom';
import "../NavLink/NavLink.scss";
import { PropTypes } from 'prop-types';

const NavLink = ({ path, text, className, setLink, classLink }) => {
    return (
        <li className={className} >
            <Link className={classLink} to={path}>{text}</Link>
        </li>
    );
};
//onClick={setLink}
NavLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    classLink: PropTypes.string.isRequired,
    //setLink: PropTypes.func.isRequired,
}

export default NavLink;