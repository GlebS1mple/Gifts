import React, { useEffect } from 'react';
import "../Product/product.scss";
import removeWebp from '../../../img/remove.webp';
import removePng from '../../../img/remove.png';
import SwiperProduct from './SwiperProduct/SwiperProduct';
import ProductImgBlock from './ProductImgBlock/ProductImgBlock';
import { PropTypes } from 'prop-types';

const Product = ({ ...props }) => {
    let { setProductUnactive, setActive, isActive, images, name, brand, price, description, id, image, count, totalProductPrice, totalProductCount } = props;
    return (
        <div className={isActive ? "popup popup__active" : "popup"} onClick={() => { setProductUnactive(false) }} >
            <div className="container popup__container">
                <div className="popup__main" onClick={e => e.stopPropagation()}>
                    <div className="popup__wrapper">
                        <picture><source srcSet={removeWebp} type="image/webp" /><img onClick={() => { setProductUnactive(false) }} src={removePng} alt="Закрыть(крестик)" className="popup__close" /></picture>
                        <div className="popup__block">
                            <div className="popup__mainblock">
                                <SwiperProduct images={images} />
                                <div className="popup__galerey">
                                    {images && images.map((image, index) =>
                                        <div className="popup__imgblock" key={index}>
                                            <ProductImgBlock image={image} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="popup__about">
                                <h1 className="popup__title">{name}</h1>
                                <div className="popup__brand">{brand}</div>
                                <h2 className="popup__price">From Price ${price}</h2>
                                <p className="popup__text">{description}</p>
                                <button onClick={() => setActive(true, false,
                                    {
                                        id: id,
                                        title: name,
                                        image: image,
                                        price: price,
                                        count: count,
                                        totalProductPrice: totalProductPrice,
                                        totalProductCount: totalProductCount,
                                    })} className="popup__orderbtn btn btn_type_dark">Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

Product.propTypes = {
    setProductUnactive: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
    totalProductPrice: PropTypes.number.isRequired,
    totalProductCount: PropTypes.number.isRequired,
};

export default Product;