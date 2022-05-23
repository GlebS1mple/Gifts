import React from 'react';
import "./nav.scss";
import NavLink from './NavLink/NavLink';
import { PropTypes } from 'prop-types';


const Nav = ({ currentNavPage, links }) => {
    return (
        <section className="nav">
            <div className="nav__container container">
                <nav className="nav__nav">
                    <ul className="nav__list">
                        {links.map(link =>
                            <NavLink
                                key={link.id}
                                text={link.text}
                                classLink={currentNavPage == link.path ? "nav__linkto nav__linkto_type_active" : "nav__linkto"}
                                className={currentNavPage == link.path ? "nav__link nav__link-active" : "nav__link"}
                                path={link.path}
                            />)}
                    </ul>
                </nav>
                <div className="nav__promoblock">
                    <div className="nav__text">Шопперы со скидкой - 25%</div>
                </div>
            </div>
        </section>
    );
};
Nav.propTypes = {
    currentNavPage: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
};

export default Nav;