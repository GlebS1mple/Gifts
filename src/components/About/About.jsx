import React, { useMemo } from 'react';
import "../About/about.scss";
import { Link } from "react-router-dom";
import logoWebp from '../../img/logo.webp';
import logoPng from '../../img/logo.png';
import searchWebp from '../../img/search.webp';
import searchPng from '../../img/search.png';
import userWebp from '../../img/user.webp';
import userPng from '../../img/user.png';
import burgerWebp from '../../img/burger.webp';
import burgerPng from '../../img/burger.png';
import AboutSearch from './AboutSearch/AboutSearch';
import BurgerContainer from './../Common/Burger/BurgerContainer';
import { PropTypes } from 'prop-types';



const About = React.memo(({ ...props }) => {
    let { searchedProducts, setProductActive, activateSearch, setCurrentValue, isActive, setMobileSearchActive, setSomeBurger, setBurger, burger, isMobileSearchActive } = props;
    return (
        <header className="about" onClick={() => { activateSearch(false) }}>
            <div className="about__container container">
                <section className="about__opening">
                    <Link to="/main" className="about__logoblock">
                        <picture><source srcSet={logoWebp} type="image/webp" /><img src={logoPng} alt="Логотип" className="logoimg" /></picture>
                    </Link>
                    <div className="about__searchblock" onClick={(e) => { e.stopPropagation() }}>
                        <input type="text"
                            onClick={() => { activateSearch(true) }}
                            onChange={(e) => setCurrentValue(e.target.value)}
                            className={isMobileSearchActive ? "about__search" : "about__search about__search_type_active"}
                            placeholder="Поиск" required />
                        <label htmlFor="before">&nbsp;</label>
                        <picture><source srcSet={searchWebp} type="image/webp" /><img src={searchPng} alt="Поиск" id="before" onClick={setMobileSearchActive} /></picture>
                        <AboutSearch searchedProducts={searchedProducts} setProductActive={setProductActive} className={isActive ? "about__search-popup_type_active" : "about__search-popup"} />
                    </div>
                    <a className="about__tel" href="tel:+380630130103">+380 630 130 103</a>
                    <picture><source srcSet={userWebp} type="image/webp" /><img src={userPng} alt="Пользователь" className="about__userimg" /></picture>
                    <div className="about__lang">
                        RU<span className="about__span">/ENG </span>
                    </div>
                    <picture><source srcSet={burgerWebp} type="image/webp" /><img src={burgerPng} onClick={setSomeBurger} alt="Меню" className="burgerimg" /></picture>
                    <BurgerContainer burger={burger} setBurger={setBurger} />
                </section>
            </div>
        </header>
    );
});

About.propTypes = {
    searchedProducts: PropTypes.array.isRequired,
    setProductActive: PropTypes.func.isRequired,
    activateSearch: PropTypes.func.isRequired,
    setCurrentValue: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    setMobileSearchActive: PropTypes.func.isRequired,
    setSomeBurger: PropTypes.func.isRequired,
    setBurger: PropTypes.func.isRequired,
    burger: PropTypes.bool.isRequired,
    isMobileSearchActive: PropTypes.bool.isRequired,
}

export default About;