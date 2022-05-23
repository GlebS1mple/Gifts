import React from 'react';
import { useForm } from "react-hook-form";
import arrowRightWebp from '../../../img/arrow-right.webp';
import arrowRightPng from '../../../img/arrow-right.png';

const FooterForm = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: "onBlur" });
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="footer__form subform">
            <div className="subform__title title">Связаться с менеджером</div>
            <div className="subform__text">Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер
                свяжеться
                с вами</div>
            <div className="subform__searchblock">
                <input
                    {...register("Telephone", {
                        required: "Заполните данное поле",
                        pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                            message: "Номер телефона введен неправильно!!"
                        }
                    })}
                    type="text" placeholder="Номер телефона" className="subform__input" />
                {errors?.Telephone && <p className="form__error">{errors?.Telephone?.message || "Ошибка!"}</p>} <label htmlFor="before__footer">&nbsp;</label>
                <button disabled={!isValid} className="subform__btn">
                    <picture><source srcSet={arrowRightWebp} type="image/webp" /><img src={arrowRightPng} alt="Стрелка вправо (Отправить номер телефона)" id="before__footer" /></picture>
                </button>
            </div>
        </form>
    );
};

export default FooterForm;