import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import logo1Webp from '../../../../img/logo1.webp';
import logo1Png from '../../../../img/logo1.png';
import logo2Webp from '../../../../img/logo2.webp';
import logo2Png from '../../../../img/logo2.png';
import logo3Webp from '../../../../img/logo3.webp';
import logo3Png from '../../../../img/logo3.png';
import logo4Webp from '../../../../img/logo4.webp';
import logo4Png from '../../../../img/logo4.png';
import logo5Webp from '../../../../img/logo5.webp';
import logo5Png from '../../../../img/logo5.png';
import arrowRight2Webp from '../../../../img/arrow-right2.webp';
import arrowRight2Png from '../../../../img/arrow-right2.png';

const SwiperSponsors = () => {
    return (
        <Swiper
            className="swiper sponsors__swiper"
            modules={[Navigation]}
            breakpoints={{
                0: {
                    width: 280,
                    slidesPerView: 1,
                },
                480: {
                    width: 480,
                    slidesPerView: 2,
                },
                867: {
                    width: 867,
                    slidesPerView: 3,
                },
                992: {
                    width: 992,
                    slidesPerView: 3,
                },
                1300: {
                    width: 1300,
                    slidesPerView: 4,
                },
                1900: {
                    width: 1900,
                    slidesPerView: 5,
                },
            }}
            navigation={{
                nextEl: '.swiper .sponsors__next',
                prevEl: '.swiper .sponsors__prev',
            }}
            spaceBetween={20}
            slidesPerView={5}
            slideToClickedSlide={false}
            watchOverflow={true}
        >
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo1Webp} type="image/webp" /><img src={logo1Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo2Webp} type="image/webp" /><img src={logo2Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo3Webp} type="image/webp" /><img src={logo3Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo4Webp} type="image/webp" /><img src={logo4Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo5Webp} type="image/webp" /><img src={logo5Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo1Webp} type="image/webp" /><img src={logo1Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo2Webp} type="image/webp" /><img src={logo2Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo3Webp} type="image/webp" /><img src={logo3Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="sponsors__imgblock">
                        <picture><source srcSet={logo1Webp} type="image/webp" /><img src={logo1Png} alt="" className="sponsors__logo" /></picture>
                    </div>
                </div>
            </div>
            <div className="sponsors__next"><picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка вправо" className="sponsors__nextimg" /></picture></div>
            <div className="sponsors__prev"><picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка влево" className="sponsors__previmg" /></picture></div>
        </Swiper>
    );
};

export default SwiperSponsors;