import React from 'react';
import "../Info/info.scss";
import girlsWebp from '../../../img/girls.webp';
import girlsPng from '../../../img/girls.png';

const Info = () => {
    return (
        <section className="info">
            <div className="container info__container">
                <div className="info__block">
                    <div className="info__subblock">
                        <div className="info__text">
                            <h1 className="info__title">Свежее дыхание в корпоративной жизни</h1>
                            <div className="info__subtitle">Мы усовершенствовали процесс заказа продукции для того, чтобы Вы и Ваша
                                компания сконцентрировались на основных задачах и достигали поставленных целей.</div>
                        </div>
                        <div className="info__items">
                            <div className="info__item">
                                <div className="info__circle"></div>
                                <div className="info__subtext">
                                    Высокое качество <span className="info__span">ONLY</span>
                                </div>
                            </div>
                            <div className="info__item">
                                <div className="info__circle"></div>
                                <div className="info__subtext">
                                    Поддержка менеджера<span className="info__span">24/7</span>
                                </div>
                            </div>
                            <div className="info__item">
                                <div className="info__circle"></div>
                                <div className="info__subtext">
                                    Выполнение заказа в<span className="info__span"> turbo-режиме</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info__imgblock">
                        <picture><source srcSet={girlsWebp} type="image/webp" /><img src={girlsPng} alt="girls" className="info__img" /></picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;