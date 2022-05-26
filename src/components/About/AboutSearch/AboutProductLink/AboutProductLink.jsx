import React from 'react';
import { Link } from 'react-router-dom';
import "../AboutProductLink/AboutProductLink.scss";
import { PropTypes } from 'prop-types';


const AboutProductLink = ({ img, title, brand, price, onClick }) => {
    return (
        <li className="about__newsearch newsearch" onClick={onClick}>
            <Link to="/catalog" className="newsearch__link">
                <img src={img} alt="Картинка товара" className="newsearch__image" />
                <div className="newsearch__description">
                    <h2 className="newsearch__title">{title}</h2>
                    <div className="newsearch__brand">{brand}</div>
                    <div className="newsearch__price">${price}</div>
                </div>
            </Link>
        </li>
    );
};

AboutProductLink.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

AboutProductLink.defaultProps = {
    img: "Картинка не загрузилась(",
}

export default React.memo(AboutProductLink);