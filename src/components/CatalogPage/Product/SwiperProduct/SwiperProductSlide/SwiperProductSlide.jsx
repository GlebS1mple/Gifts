import React from 'react';
import { PropTypes } from 'prop-types';

const SwiperProductSlide = ({ image }) => {
    return (
        <picture><source srcSet={image} type="image/webp" /><img src={image} alt="товар" className="popup__image" /></picture>
    );
};
SwiperProductSlide.propTypes = {
    image: PropTypes.string.isRequired,
};
SwiperProductSlide.defautProps = {
    image: "Картинка не загрузилась("
};

SwiperProductSlide.propTypes = {
    image: PropTypes.string.isRequired,
};

export default React.memo(SwiperProductSlide);