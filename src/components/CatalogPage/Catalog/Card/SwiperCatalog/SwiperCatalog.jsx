import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperSlideC from "./SwiperSlideC/SwiperSlideC";
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import arrowRight2Webp from '../../../../../img/arrow-right2.webp';
import arrowRight2Png from '../../../../../img/arrow-right2.png';
import 'swiper/css';
import { PropTypes } from 'prop-types';

const SwiperCatalog = ({ images }) => {
    return (
        <Swiper
            className="swiper card__swiper"
            modules={[Navigation]}
            navigation={{
                nextEl: '.swiper .card__next',
                prevEl: '.swiper .card__prev',
            }}
            spaceBetween={0}
            slidesPerView={1}
            slideToClickedSlide={false}
            watchOverflow={true}
        >
            <div className="swiper-wrapper">
                {images.map((image, index) =>
                    <SwiperSlide key={index} className="swiper-slide card__slide">
                        <SwiperSlideC mainImg={image} />
                    </SwiperSlide>
                )}
            </div>
            <div className="card__next"><picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка вправо(перелистнуть дальше)" className="card__nextimg" onClick={e => e.stopPropagation()} /></picture></div>
            <div className="card__prev"><picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка влево(перелистнуть назад)" className="card__previmg" onClick={e => e.stopPropagation()} /></picture></div>
        </Swiper>
    );
};
SwiperCatalog.propTypes = {
    images: PropTypes.array.isRequired,
};

export default React.memo(SwiperCatalog);