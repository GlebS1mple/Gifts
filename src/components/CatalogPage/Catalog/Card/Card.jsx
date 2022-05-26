import React from 'react';
import SwiperCatalog from './SwiperCatalog/SwiperCatalog';
import cartWebp from '../../../../img/cart.webp';
import cartPng from '../../../../img/cart.png';
import { PropTypes } from 'prop-types';


const Card = ({ name, price, brand, images, onClick, setCartProductActive, id, image, count, totalProductCount }) => {
    return (
        <div className="main__cardblock">
            <div className="main__card card" onClick={onClick}>
                <SwiperCatalog images={images} />
                <div className="card__block">
                    <div className="card__textblock">
                        <div className="card__name">{name}</div>
                        <div className="card__subname">{brand}</div>
                    </div>
                    <div className="card__priceblock">
                        <div className="card__pricetype">From Price</div>
                        <div className="card__price">${price}</div>
                    </div>
                </div>
                <button className="card__cart" >
                    <picture><source srcSet={cartWebp} type="image/webp" /><img src={cartPng} alt="Добавить в корзину" className="card__imgcart" /></picture>
                </button>
            </div>
        </div >
    )
};
/*onClick={(e) => setCartProductActive(false, false,
                    {
                        id: id,
                        title: name,
                        image: image,
                        price: price,
                        count: 1,
                        totalProductPrice: price,
                        totalProductCount: totalProductCount,
                    }, e)} */
Card.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};

export default React.memo(Card);