import React from 'react';
import Main from './Main';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setNavLink } from '../../redux/navReducer';
import { setSearchActiveAC } from '../../redux/aboutReducer';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartActiveAC } from './../../redux/cartReducer';

const MainContainer = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const activateSearch = (isActive) => {
        dispatch(setSearchActiveAC(isActive))
    }
    let location = useLocation();
    useEffect(() => {
        if (location.pathname !== '/') {
            dispatch(setNavLink(location.pathname))
        }
    }, [])
    let [activeModal, setActiveModal] = useState(false);
    let openModal = () => {
        setActiveModal(true)
    }
    let closeModal = () => {
        setActiveModal(false);
    }
    let setCartActive = (isActive) => {
        dispatch(setCartActiveAC(isActive));
        setActiveModal(false);
    }
    const totalPrice = state.cart.totalPrice;
    const totalCount = state.cart.totalProductsCount;
    return (
        <Main
            openModal={openModal}
            activateSearch={activateSearch}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            closeModal={closeModal}
            setCartActive={setCartActive}
            totalPrice={totalPrice}
            totalCount={totalCount}
        />
    );
};

export default MainContainer;