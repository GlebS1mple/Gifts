import React from 'react';
import { PropTypes } from 'prop-types';

const ProductImgBlock = ({ image }) => {
    return (
        <picture><source srcSet={image} type="image/webp" /><img src={image} alt="Кружка" className="popup__smallimg" /></picture>
    );
};

ProductImgBlock.propTypes = {
    image: PropTypes.string.isRequired,
}
ProductImgBlock.defautProps = {
    image: "Картинка не загрузилась("
};

export default ProductImgBlock;