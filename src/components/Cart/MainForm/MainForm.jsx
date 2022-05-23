import React from 'react';
import { useForm } from "react-hook-form";
import { PropTypes } from 'prop-types';


const MainForm = ({ formName, inputName, btnName, coopName }) => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: "onBlur" });
    const onSubmit = data => {
        alert("Спасибо за покупку!");
        console.log(data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formName}>
            <input
                {...register("firstName", {
                    required: "Заполните данное поле",
                    minLength: {
                        value: 3,
                        message: "Минимум символов 3"
                    },
                    maxLength: {
                        value: 15,
                        message: "Максимум символов 15"
                    },
                })}
                type="text" placeholder="Name" className={inputName} />
            {errors?.firstName && <p className="form__error">{errors?.firstName?.message || "Ошибка!"}</p>}
            <input
                {...register("Email", {
                    required: "Заполните данное поле",
                    pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Почта введена неправильно!"
                    }
                })}
                type="text" placeholder="Email" className={inputName} />
            {errors?.Email && <p className="form__error">{errors?.Email?.message || "Ошибка!"}</p>}

            <input
                {...register("Telephone", {
                    required: "Заполните данное поле",
                    pattern: {
                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                        message: "Номер телефона введен неправильно!!"
                    }
                })}
                type="text" placeholder="Telephone" className={inputName} />
            {errors?.Telephone && <p className="form__error">{errors?.Telephone?.message || "Ошибка!"}</p>}
            <button disabled={!isValid} className={btnName}>Заказать</button>
        </form>
    );
};
//<div className={coopName}>
MainForm.propTypes = {
    formName: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
    //coopName: PropTypes.string.isRequired,
}


export default MainForm;
