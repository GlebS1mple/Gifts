import React from 'react';
import { Link } from "react-router-dom";
import "../Products/products.scss";
import { CSSTransition } from 'react-transition-group';
import favWebp from '../../../img/fav.webp';
import favPng from '../../../img/fav.png';
import product1Webp from '../../../img/product1.webp';
import product1Png from '../../../img/product1.jpg';
import product2Webp from '../../../img/product2.webp';
import product2Png from '../../../img/product2.jpg';
import crossWebp from '../../../img/cross.webp';
import crossPng from '../../../img/cross.png';
import deleteWebp from '../../../img/delete.webp';
import deletePng from '../../../img/delete.png';
import product3Webp from '../../../img/product3.webp';
import product3Png from '../../../img/product3.jpg';
import { PropTypes } from 'prop-types';

const Products = ({ ...props }) => {
    let { setCartActive, setActiveModal, activeModal, closeModal, openModal, totalCount, totalPrice } = props;

    return (
        <section className="products">
            <div className="container products__container">
                <div className="products__main">
                    <div className="products__text">
                        <div className="products__textblock">
                            <div className="products__titleblock">
                                <h1 className="products__title">Самое популярное</h1>
                                <picture><source srcSet={favWebp} type="image/webp" /><img src={favPng} alt="Нравится" className="products__fav" /></picture>
                            </div>
                            <div className="products__subtitle">Товары, которые наиболее часто заказывают наши клиенты</div>
                        </div>
                        <Link to="/catalog" className="products__lnik">
                            <div className="products__linktext">Все товары</div>
                            <div className="products__arrow">&#8594;</div>
                        </Link>
                    </div>
                    <div className="products__galleria">
                        <Link to="/catalog" className="products__link products__big-link">
                            <picture><source srcSet={product1Webp} type="image/webp" /><img src={product1Png} alt="Шопперы" className="products__big-img" /></picture>
                        </Link>
                        <div className="products__link products__mid-link">
                            <picture><source srcSet={product2Webp} type="image/webp" /><img src={product2Png} alt="Кружки" className="products__mid-img" /></picture>
                            <CSSTransition
                                in={activeModal}
                                timeout={3000}
                                classNames="modal"
                                unmountOnExit
                                onEnter={() => setActiveModal(true)}
                                onExited={() => setActiveModal(false)}
                            >
                                <div className={activeModal ? "products__modal products__modal_type_active" : "products__modal"}>
                                    <div onClick={closeModal} className="products__stay">Продолжить покупки</div>
                                    <div onClick={() => { setCartActive(true) }} className="products__cart-link">В корзину</div>
                                    <picture><source srcSet={crossWebp} type="image/webp" /><img src={crossPng} onClick={closeModal} alt="Закрыть окно" className="products__cross" /></picture>
                                </div>
                            </CSSTransition>
                            <div className="products__cart" onClick={openModal}>
                                <div className="products__border">
                                    <div className="products__count">{totalCount}</div>
                                    <picture><source srcSet={deleteWebp} type="image/webp" /><img src={deletePng} alt="Корзина" className="products__cart-img" /></picture>
                                </div>
                                <div className="products__price">{totalPrice} $</div>
                            </div>
                        </div>
                        <Link to="/catalog" className="products__link products__small-link-first">
                            <picture><source srcSet={product3Webp} type="image/webp" /><img src={product3Png} alt="Майка" className="products__small-img1" /></picture>
                        </Link>
                        <Link to="/catalog" className="products__link products__small-link-second">
                            <picture><source srcSet={product3Webp} type="image/webp" /><img src={product3Png} alt="Майка" className="products__small-img2" /></picture>
                        </Link>
                    </div>
                    <Link to="/catalog" className="products__lnik products__lnik-after">
                        <div className="products__linktext">Все товары</div>
                        <div className="products__arrow">&#8594;</div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
Products.propTypes = {
    openModal: PropTypes.func.isRequired,
    activeModal: PropTypes.bool.isRequired,
    setActiveModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    setCartActive: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
};

export default React.memo(Products);