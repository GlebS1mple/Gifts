import React, { useMemo } from 'react';
import "../Burger/Burger.scss";
import userWebp from '../../../img/user.webp';
import userPng from '../../../img/user.png';
import removeWebp from '../../../img/remove.webp';
import removePng from '../../../img/remove.png';
import link1Webp from '../../../img/link1.webp';
import link1Png from '../../../img/link1.png';
import link2Webp from '../../../img/link2.webp';
import link2Png from '../../../img/link2.png';
import link3Webp from '../../../img/link3.webp';
import link3Png from '../../../img/link3.png';
import PropTypes from 'prop-types';
import BurgerLink from './BurgerLink/BurgerLink';

const Burger = ({ burger, setBurger, closeBurger, links, currentCategory, filterBy }) => {

    return (
        <div className={burger ? "burger__menu burger__menu_type_active" : "burger__menu"}>
            <div className="burger__blockimg">
                <picture><source srcSet={removeWebp} type="image/webp" /><img src={removePng} alt="Крестик" onClick={closeBurger} className="burger__deleteproduct" /></picture>
            </div>
            <div className="burger__profileblock">
                <div className="burger__lang about__lang">
                    <div className="burger__ru"> RU</div><span className="burger__span about__span">/ENG </span>
                </div>
                <picture><source srcSet={userWebp} type="image/webp" /><img src={userPng} alt="Пользователь" className="about__userimg burger__userimg" /></picture>
            </div>
            <nav className="burger__nav">
                <ul className="burger__list">
                    {links.map((link) =>
                        <BurgerLink
                            key={link.id}
                            text={link.text}
                            name={link.category == currentCategory ? "burger__link burger__link_type_active " : "burger__link"}
                            routeName={link.category == currentCategory ? "burger__route burger__route_type_active " : "burger__route"}
                            onClick={() => filterBy(link.category)}
                            category={link.category}
                        />)}

                </ul>
            </nav>
            <a href="" className="footer__mail">example@gmail.com</a>
            <a className="about__tel burger__tel" href="tel:+380630130103">+380 630 130 103</a>
            <ul className="footer__icons burger__icons">
                <li><a href="" className="footer__link"><picture><source srcSet={link1Webp} type="image/webp" /><img src={link1Png} className="footer__icon" alt="Фэйсбук" /></picture></a>
                </li>
                <li><a href="" className="footer__link"><picture><source srcSet={link2Webp} type="image/webp" /><img src={link2Png} className="footer__icon" alt="Инстаграм" /></picture></a>
                </li>
                <li><a href="" className="footer__link"><picture><source srcSet={link3Webp} type="image/webp" /><img src={link3Png} className="footer__icon" alt="Линкдин" /></picture></a>
                </li>
            </ul>
        </div>

    );
};
/*<li className="burger__link"><Link onClick={() => filterBy(link.category)} onClick={closeBurger} className="burger__route" to="/catalog">Смартфоны</Link></li>
                    <li className="burger__link"><Link onClick={closeBurger} className="burger__route" to="/catalog">Ноутбуки</Link></li>
                    <li className="burger__link"><Link onClick={closeBurger} className="burger__route" to="/catalog">Духи</Link></li>
                    <li className="burger__link"><Link onClick={closeBurger} className="burger__route" to="/catalog">Забота о коже</Link></li>
                    <li className="burger__link"><Link onClick={closeBurger} className="burger__route" to="/catalog">Еда</Link></li>
                    <li className="burger__link"><Link onClick={closeBurger} className="burger__route" to="/catalog">Для дома</Link></li> */

Burger.propTypes = {
    burger: PropTypes.bool.isRequired,
    setBurger: PropTypes.func.isRequired,
    closeBurger: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    currentCategory: PropTypes.string.isRequired,
    filterBy: PropTypes.func.isRequired
}

Burger.defaultProps = {
    burger: false
}

export default Burger;