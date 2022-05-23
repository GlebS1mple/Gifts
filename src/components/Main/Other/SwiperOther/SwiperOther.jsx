import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import acc1Webp from "../../../../img/acc1.webp";
import acc1Png from "../../../../img/acc1.png";
import acc2Webp from "../../../../img/acc2.webp";
import acc2Png from "../../../../img/acc2.png";
import acc3Webp from "../../../../img/acc3.webp";
import acc3Png from "../../../../img/acc3.png";
import acc4Webp from "../../../../img/acc4.webp";
import acc4Png from "../../../../img/acc4.png";
import arrowRight2Webp from '../../../../img/arrow-right2.webp';
import arrowRight2Png from '../../../../img/arrow-right2.png';
import SwiperOtherSlide from './SwiperOtherSlide/SwiperOtherSlide';

const SwiperOther = () => {
    /*const Accessories = [
        { id: 1, webP: '1.webp', png: '1.png' },
        { id: 2, webP: '2.webp', png: '2.png' },
        { id: 3, webP: '3.webp', png: '3.png' },
        { id: 4, webP: '4.webp', png: '4.png' },
        { id: 5, webP: '1.webp', png: '1.png' },
        { id: 6, webP: '2.webp', png: '2.png' },
    ]*/
    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: '.swiper .other__next',
                prevEl: '.swiper .other__prev',
            }}
            className="swiper other__swiper"
            spaceBetween={0}
            slidesPerView={4}
            slideToClickedSlide={false}
            watchOverflow={true}
        >
            <div className="slither swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="other__imgblock">
                        <picture><source srcSet={acc2Webp} type="image/webp" /><img src={acc2Png} alt="Акссесуар" className="other__accimg other__accimg-second" /></picture>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="other__imgblock">
                        <picture><source srcSet={acc3Webp} type="image/webp" /><img src={acc3Png} alt="Акссесуар" className="other__accimg other__accimg-third" /></picture>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="other__imgblock">
                        <picture><source srcSet={acc4Webp} type="image/webp" /><img src={acc4Png} alt="Акссесуар" className="other__accimg other__accimg-fouth" /></picture>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="other__imgblock">
                        <picture><source srcSet={acc1Webp} type="image/webp" /><img src={acc1Png} alt="Акссесуар" className="other__accimg other__accimg-first" /></picture>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="other__imgblock">
                        <picture><source srcSet={acc2Webp} type="image/webp" /><img src={acc2Png} alt="Акссесуар" className="other__accimg other__accimg-second" /></picture>
                    </div>
                </SwiperSlide>

            </div>
            <div className="other__next"><picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка вправо" className="other__nextimg" /></picture></div>
            <div className="other__prev"><picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка вправо" className="other__previmg" /></picture></div>
        </Swiper>
    );
};

/*
{Accessories.length > 0 && Accessories.map(acc =>
                    <SwiperSlide key={acc.id} className="swiper-slide">
                        <SwiperOtherSlide webP={acc.webP} png={acc.png} />
                    </SwiperSlide>)
                }
<SwiperSlide className="swiper-slide">
    <SwiperOtherSlide img={"acc2"} />
</SwiperSlide>
<SwiperSlide className="swiper-slide">
    <SwiperOtherSlide img={"acc3"} />
</SwiperSlide>
<SwiperSlide className="swiper-slide">
    <SwiperOtherSlide img={"acc4"} />
</SwiperSlide>
<SwiperSlide className="swiper-slide">
    <SwiperOtherSlide img={"acc1"} />
</SwiperSlide>*/
export default SwiperOther;