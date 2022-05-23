import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import arrowRight2Webp from '../../../../img/arrow-right2.webp';
import arrowRight2Png from '../../../../img/arrow-right2.png';
import SwiperProductSlide from './SwiperProductSlide/SwiperProductSlide';
import { PropTypes } from 'prop-types';
const SwiperProduct = ({ images }) => {
    return (
        <Swiper
            className="swiper popup__swiper"
            modules={[Navigation]}
            navigation={{
                nextEl: '.swiper .popup__next',
                prevEl: '.swiper .popup__prev',
            }}
            spaceBetween={0}
            slidesPerView={1}
            slideToClickedSlide={false}
            watchOverflow={true}
        >
            <div className="swiper-wrapper popup__swiperwrapper">
                {images && images.map((image, index) =>
                    <SwiperSlide key={index} className="swiper-slide popup__slide">
                        <SwiperProductSlide image={image} />
                    </SwiperSlide>
                )}
            </div>
            <div className="popup__next">
                <picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Предыдущая страница" className="popup__nextimg" /></picture>
            </div>
            <div className="popup__prev">
                <picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Следующая страница" className="popup__previmg" /></picture>
            </div>
        </Swiper>
    );
};

SwiperProduct.propTypes = {
    images: PropTypes.array.isRequired,
};
export default SwiperProduct;