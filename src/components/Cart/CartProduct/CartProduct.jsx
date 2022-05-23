import React, { useEffect } from 'react';
import removeWebp from '../../../img/remove.webp';
import removePng from '../../../img/remove.png';
import { PropTypes } from 'prop-types';

const CartProduct = ({ addProduct, removeProduct, deleteProduct, ...product }) => {
    const totalProductPrice = product.price * product.count;
    const totalProductCount = product.count;
    return (
        <li className="popup__card">
            <div className="popup__imagecartblock">
                <picture><source srcSet={product.image} type="image/webp" /><img src={product.image} alt="Корзина" className="popup__productimg" /></picture>
            </div>
            <div className="popup__productname">{product.title}</div>
            <div className="popup__numberblock">
                <div className="popup__numbertitle">Кол-во</div>
                <div className="popup__amountblock">
                    <button onClick={() => { removeProduct(product.id, totalProductPrice, product.price, totalProductCount) }} className="popup__change popup__change_type_minus">-</button>
                    <div className="popup__number">{product.count}</div>
                    <button onClick={() => { addProduct(product.id, product.count, product.price, totalProductCount) }} className="popup__change popup__change_type_plus">+</button>
                </div>
            </div>
            <div className="popup__price popup__price_type_cart">${product.totalProductPrice}</div>
            <button onClick={() => { deleteProduct(product.id) }} className="popup__btn_type_deleteproduct">
                <picture><source srcSet={removeWebp} type="image/webp" /><img src={removePng} alt="Удалить продукт из списка(крестик)" className="popup__deleteproduct" /></picture>
            </button>
        </li>
    );
};

CartProduct.propTypes = {
    addProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        totalProductCount: PropTypes.number.isRequired,
        totalProductPrice: PropTypes.number.isRequired,
    })
}

CartProduct.defaultProps = {
    image: "Картинка не загрузилась(",
}

export default CartProduct;