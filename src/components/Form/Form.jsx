import React from 'react';
import "./form.scss";
import rocket1Webp from '../../img/rocket1.webp';
import rocket1Png from '../../img/rocket1.png';
import rocket2Webp from '../../img/rocket2.webp';
import rocket2Png from '../../img/rocket2.png';
import lampWebp from '../../img/lamp.webp';
import lampPng from '../../img/lamp.png';
import MainForm from './../Cart/MainForm/MainForm';
import { useSelector } from 'react-redux';



const Form = () => {
    let currentNavPage = useSelector(state => state.nav.currentNavPage);
    let isCatalog = false;
    if (currentNavPage === "/catalog") {
        isCatalog = true;
    }
    return (
        <div className={isCatalog ? "form form_color_white" : "form"}>
            <div className="container form__container">
                <div className="form__block">
                    <div className="form__about">
                        <div className="form__text">
                            <div className="form__heading">
                                <p className="form__maintext">У вас своя уникальная идея по разработке мерча?</p>
                                <p className="form__subtext">Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с
                                    технологией производства, предоставим образцы матералов. </p>
                            </div>
                        </div>
                        <div className="form__images">
                            <div className="form__rocketblock">
                                <picture><source srcSet={rocket1Webp} type="image/webp" /><img src={rocket1Png} alt="Рокета" className="form__rocket1" /></picture>
                            </div>
                            <picture><source srcSet={lampWebp} type="image/webp" /><img src={lampPng} alt="Лампа" className="form__idea" /></picture>
                            <div className="form__rocket2block">
                                <picture><source srcSet={rocket2Webp} type="image/webp" /><img src={rocket2Png} alt="Рокета" className="form__rocket2" /></picture>
                            </div>
                        </div>
                    </div>
                    <div className="form__someblock">
                        <p className="form__midtext">Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1
                            часа</p>
                        <MainForm formName={"form__main"} inputName={"form__input"} btnName={"form__btn"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Form;