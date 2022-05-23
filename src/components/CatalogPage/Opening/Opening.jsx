import React from 'react';
import "../Opening/opening.scss";
import hoodyWebp from '../../../img/hoody.webp';
import hoodyPng from '../../../img/hoody.png';
import { Link } from 'react-router-dom';

const Opening = () => {
    return (
        <section className="opening">
            <div className="container opening__container">
                <div className="opening__block">
                    <div className="opening__textblock">
                        <div className="catlink">
                            <Link to="/main" className="catlink__link catlink__link_type_main link__main">Главная </Link>
                            <div className="catlink__link catlink__link_type_catalog"> / Все товары</div>
                        </div>
                        <h1 className="opening__title">купить чашку с логотипом</h1>
                        <p className="opening__maintext">Чашки с логотипом - это классика. Любая конференция или бизнес встреча не
                            обойдется без данного реквизина. Так же это прекрасный подарок для ваших сотрудников, деловых
                            партнеров, друзей или постоянных клиентов . Владельцы заведений общественного питания могут заказать
                            крупные партии чашек для своего ресторана или кафе. Также вы можете распространять эти изделия во
                            время рекламных мероприятий, презентаций, выставок или конференций.</p>
                    </div>
                    <div className="opening__imgblock">
                        <h1 className="opening__title opening__title_type_media">купить чашку с логотипом</h1>
                        <picture><source srcSet={hoodyWebp} type="image/webp" /><img src={hoodyPng} alt="" className="opening__img" /></picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opening;