import React from 'react';
import { PropTypes } from 'prop-types';
const SwiperSlideC = ({ mainImg }) => {
    return (
        <picture><source srcSet={mainImg} type="image/webp" /><img src={mainImg} alt="товар" className="card__image" /></picture>
    );
};
SwiperSlideC.propTypes = {
    mainImg: PropTypes.string.isRequired,
};

export default React.memo(SwiperSlideC);