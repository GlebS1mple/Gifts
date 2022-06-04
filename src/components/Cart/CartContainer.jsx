import React from 'react';
import Cart from './Cart';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductAC, setCartActiveAC, setCartProductsAC, removeProductAC, deleteCartProductsAC, setTotalPriceAC, setTotalProductsCountAC } from './../../redux/cartReducer';

const CartContainer = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let setCartActive = (isActive) => {
        dispatch(setCartActiveAC(isActive))
        /*localStorage.setItem("cartProducts", JSON.stringify(state.cart.cartProducts));
        localStorage.setItem("totalPrice", JSON.stringify(state.cart.totalPrice));
        localStorage.setItem("totalProductsCount", JSON.stringify(state.cart.totalProductsCount));*/
    }
    let total = state.cart.totalPrice;

    /*useEffect(() => {
        
    }, [state.cart.cartProducts,
    state.cart.totalPrice,
    state.cart.totalProductsCount]);*/


    /*useEffect(() => {
        const raw = localStorage.getItem("cartState");
        let cartStorageProducts = JSON.parse(raw);
        console.log(cartStorageProducts)
        dispatch(setCartProductsAC(cartStorageProducts.cartProducts))
    }, [])*/
    const setUnactiveCart = (isActive) => {
        dispatch(setCartActiveAC(isActive))
    }
    useEffect(() => {
        let totalPrice = state.cart.cartProducts.reduce((prev, current) => prev + current.totalProductPrice, 0);
        dispatch(setTotalPriceAC(totalPrice));
        let totalProductsCount = state.cart.cartProducts.reduce((prev, current) => prev + current.count, 0);
        dispatch(setTotalProductsCountAC(totalProductsCount));
    }, [state.cart.cartProducts])
    const addProduct = (id, count, price, totalProductCount) => {
        dispatch(addProductAC(id, count, price, totalProductCount));
    };
    const removeProduct = (id, totalProductPrice, price, totalProductCount) => {
        dispatch(removeProductAC(id, totalProductPrice, price, totalProductCount));
    };
    const deleteProduct = (id) => {
        dispatch(deleteCartProductsAC(id));
        if (state.cart.cartProducts.length = 1) {
            dispatch(setTotalPriceAC(0));
            dispatch(setTotalProductsCountAC(0));
        }
    }
    return (
        <Cart
            total={total}
            setCartActive={setCartActive}
            isActive={state.cart.isActive}
            cartProducts={state.cart.cartProducts}
            setUnactiveCart={setUnactiveCart}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            removeProduct={removeProduct}
        />
    );
};

export default CartContainer;