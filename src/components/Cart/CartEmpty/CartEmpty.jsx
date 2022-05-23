import React from 'react';
import { Link } from 'react-router-dom';
import "../CartEmpty/CartEmpty.scss";
import cart from "../../../img/empty_cart.jpg";
import { PropTypes } from 'prop-types';

const CartEmpty = ({ setUnactiveCart }) => {
    return (
        <div className="empty">
            <h2 className="empty__title">Корзина пустая :&#40; </h2>
            <p className="empty__text">Перейдите в каталог товаров для добавления товаров в корзину</p>
            <Link onClick={() => { setUnactiveCart(false) }} className="empty__link" to="/catalog">Каталог</Link>
            <img src={cart} alt="Корзина(ссылка на каталог)" className="empty__image" />
        </div>
    );
};

CartEmpty.propTypes = {
    setUnactiveCart: PropTypes.func.isRequired
}

export default CartEmpty;