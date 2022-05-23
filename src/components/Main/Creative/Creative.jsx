import React from 'react';
import "../Creative/creative.scss"
import kitWebp from '../../../img/kit.webp';
import kitPng from '../../../img/kit.png';

const Creative = () => {
    return (
        <section className="creative">
            <div className="container creative__container">
                <div className="creative__block">
                    <div className="creative__textflex">
                        <h1 className="creative__heading">CREATIVE</h1>
                        <h2 className="creative__subheading">Хотите удивить ваших коллег/партнеров необычными подарками?</h2>
                        <p className="creative__text">Выбирайте готовые подарочные наборы или укажите критерии по которым мы соберем
                            для Вас уникальный бокс.</p>
                        <div className="creative__btnblock">
                            <button className="creative__btn creative__btn-black">Перейти к наборам</button>
                            <button className="creative__btn creative__btn-white">Создать свой</button>
                        </div>

                    </div>
                    <div className="creative__imgflex">
                        <picture><source srcSet={kitWebp} type="image/webp" /><img src={kitPng} alt="Набор" className="creative__img" /></picture>
                        <div className="creative__square"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creative;