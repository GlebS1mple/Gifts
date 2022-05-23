import React from 'react';
import "../Other/other.scss";
import sweaterWebp from '../../../img/sweater.webp';
import sweaterJpg from '../../../img/sweater.jpg';
import SwiperOther from './SwiperOther/SwiperOther';

const Other = () => {
    return (
        <section className="other">
            <div className="container other__container">
                <div className="other__block">
                    <div className="other__imgcircleblock">
                        <div className="other__imgwrapper">
                            <picture><source srcSet={sweaterWebp} type="image/webp" /><img src={sweaterJpg} alt="Свитер" className="other__img" /></picture>
                        </div>
                        <div className="other__bigcircle"></div>
                        <div className="other__circle"></div>
                    </div>
                    <div className="other__flex">
                        <p className="other__maintext">Помимо готовой продукции высокого качества, мы можем для Вас произвести
                            одежду, аксессуры, вкусности и другое под заказ.</p>
                        <p className="other__text">Благодаря личному производству мы изготавливаем большие партии в короткие сроки,
                            а так же у Вас всегда есть возможность кастомизировать изделия.</p>
                        <SwiperOther />
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Other;