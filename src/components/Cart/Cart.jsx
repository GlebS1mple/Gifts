import React from 'react';
import "../Cart/cart.scss";
import removeWebp from '../../img/remove.webp';
import removePng from '../../img/remove.png';
import CartProduct from './CartProduct/CartProduct';
import MainForm from './MainForm/MainForm';
import CartEmpty from './CartEmpty/CartEmpty';
import { PropTypes } from 'prop-types';



const Cart = React.memo(({ ...props }) => {
    let { addProduct, deleteProduct, removeProduct, setCartActive, total, isActive, cartProducts, setUnactiveCart } = props;
    return (
        <div className={isActive ? "popup popup__active" : "popup"} onClick={() => { setCartActive(false) }}>
            <div className="container popup__container">
                <div className="popup__main" onClick={(e) => { e.stopPropagation() }}>
                    <div className="popup__wrapper popup__wrapper_type_cart">
                        <picture><source srcSet={removeWebp} type="image/webp" /><img src={removePng} alt="Закрыть (крестик)" onClick={() => { setCartActive(false) }} className="popup__close popup__close_type_cart" /></picture>
                        {cartProducts.length > 0 ?
                            <div className="popup__block popup__block_type_cart">
                                <div className="popup__formblock">
                                    <h1 className="popup__title popup__title_type_cart">Оформить заказ</h1>
                                    <div className="popup__text">Введите свои контактные данные, и наш менеджер свяжется с Вами в
                                        течении 1 часа</div>
                                    <MainForm formName={"popup__form"} inputName={"popup__input"} btnName={"btn btn_type_light btn__popupcart"} coopName={"popup__formcoop popup__formcoop_type_inputs"} />
                                    <p className="popup__confirm">Натискаючи "Підтвердити замовлення", Ви даєте згоду на обробку Ваших
                                        персональних даних</p>
                                </div>
                                <div className="popup__products">
                                    <div className="popup__productsmobule">
                                        <div className="popup__title popup__title_type_cart">Корзина</div>
                                        <div className="popup__order popup__order_type_mobile">Заказ № 110293</div>
                                    </div>
                                    <ul className="popup__cardsblock">
                                        {/*cartStorageProducts.length > 0 ? cartStorageProducts.map((product, index) =>
                                            <CartProduct
                                                key={index}
                                                id={product.id}
                                                title={product.title}
                                                image={product.image}
                                                price={product.price}
                                                totalProductPrice={product.totalProductPrice}
                                                totalProductCount={product.totalProductCount}
                                                count={product.count} />) :*/ cartProducts.map((product, index) =>
                                            <CartProduct
                                                key={index}
                                                id={product.id}
                                                title={product.title}
                                                image={product.image}
                                                price={product.price}
                                                totalProductPrice={product.totalProductPrice}
                                                totalProductCount={product.totalProductCount}
                                                count={product.count}
                                                addProduct={addProduct}
                                                deleteProduct={deleteProduct}
                                                removeProduct={removeProduct}
                                            />)}
                                    </ul>
                                    <div className="popup__addinfo">
                                        <div className="popup__order popup__order_type_desktop">Заказ № 110293</div>
                                        <div className="popup__totalpriceblock">
                                            <div className="popup__total">Всего:$ </div>
                                            <div className="popup__totalprice">{total}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <CartEmpty setUnactiveCart={setUnactiveCart} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});
//state.cart.cartProducts.length > 0 &&


Cart.propTypes = {
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    setCartActive: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    cartProducts: PropTypes.array.isRequired,
    setUnactiveCart: PropTypes.func.isRequired
}

export default Cart;