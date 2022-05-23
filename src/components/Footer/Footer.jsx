import React from 'react';
import "../Footer/footer.scss";
import logoWebp from '../../img/logo.webp';
import logoPng from '../../img/logo.png';
import link1Webp from '../../img/link1.webp';
import link1Png from '../../img/link1.png';
import link2Webp from '../../img/link2.webp';
import link2Png from '../../img/link2.png';
import link3Webp from '../../img/link3.webp';
import link3Png from '../../img/link3.png';
import { Link } from 'react-router-dom';
import FooterForm from './FooterForm/FooterForm';
import { PropTypes } from 'prop-types';



const Footer = ({ isCatalog }) => {
    return (
        <div className={isCatalog ? "footer footer_color_otherwhite" : "footer"}>
            <div className="container footer__container">
                <div className="footer__block">
                    <div className="footer__subblock">
                        <div className="footer__contacts">
                            <div className="footer__subcontacts">
                                <picture><source srcSet={logoWebp} type="image/webp" /><img src={logoPng} alt="Логотип" className="footer__logo" /></picture>
                                <div className="footer__subtitle subtitle">Свежее дыхание в корпоративной жизнии жизни корпоративной
                                    дыхание
                                    свежее </div>
                            </div>
                            <div className="footer__contactsblock">
                                <div className="footer__contactslink">
                                    <a href="tel:+380 630 130 103" className="footer__phone">+380 630 130 103</a>
                                    <a href="" className="footer__mail">example@gmail.com</a>
                                </div>
                                <ul className="footer__icons">
                                    <li><a href="" className="footer__link"><picture><source srcSet={link1Webp} type="image/webp" /><img src={link1Png} className="footer__icon" alt="Фэйсбук" /></picture></a>
                                    </li>
                                    <li><a href="" className="footer__link"><picture><source srcSet={link2Webp} type="image/webp" /><img src={link2Png} className="footer__icon" alt="Инстаграм" /></picture></a>
                                    </li>
                                    <li><a href="" className="footer__link"><picture><source srcSet={link3Webp} type="image/webp" /><img src={link3Png} className="footer__icon" alt="Линкдин" /></picture></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__maincategories">
                            <ul className="footer__categories">
                                <li className="footer__title title">
                                    Категории
                                </li>
                                <li><a href="" className="footer__subtitle subtitle">
                                    Пошив
                                </a></li>
                                <li><Link to="/catalog" className="footer__subtitle subtitle">
                                    Все товары
                                </Link></li>
                                <li><a href="" className="footer__subtitle subtitle">
                                    Наборы
                                </a></li>
                                <li><a href="" className="footer__subtitle subtitle">
                                    Производство
                                </a></li>
                            </ul>
                            <ul className="footer__categories">
                                <li className="footer__title title">
                                    Информация
                                </li>
                                <li><a href="" className="footer__subtitle subtitle">
                                    О нас
                                </a></li>
                                <li><a href="" className="footer__subtitle subtitle">
                                    ЧаВо
                                </a></li>
                                <li><a href="" className="footer__subtitle subtitle">
                                    Контакты
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <FooterForm />
                </div>
                <div className="footer__copyright">© 2022 . All rights reserved. <a href="" className="footer__copylink">Политика
                    конфиденциальности</a></div>
            </div>
        </div>
    );
};
Footer.propTypes = {
    isCatalog: PropTypes.bool.isRequired,
};

export default Footer;