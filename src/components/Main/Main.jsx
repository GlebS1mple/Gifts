import React from 'react';
import "../Main/style.scss"
import Creative from './Creative/Creative';
import Info from './Info/Info';
import Other from './Other/Other';
import Products from './Products/Products';
import Sponsors from './Sponsors/Sponsors';
import CartContainer from './../Cart/CartContainer';
import { PropTypes } from 'prop-types';


const Main = ({ ...props }) => {
    let { activateSearch, setCartActive, setActiveModal, activeModal, closeModal, openModal, totalCount, totalPrice } = props;
    return (
        <div onClick={() => { activateSearch(false) }}>
            <Info />
            <Products
                openModal={openModal}
                activateSearch={activateSearch}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                closeModal={closeModal}
                setCartActive={setCartActive}
                totalPrice={totalPrice}
                totalCount={totalCount}
            />
            <Creative />
            <Other />
            <Sponsors />
            <CartContainer />
        </div>
    );
};
Main.propTypes = {
    openModal: PropTypes.func.isRequired,
    activeModal: PropTypes.bool.isRequired,
    setActiveModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    setCartActive: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
};

export default React.memo(Main);