import React from 'react';
import s from "../Preloader/Preloader.module.css"

let Preloader = () => {
    return (
        <div className={s.preloaderblock}>
            <img src="https://glebs1mple.github.io/demo-socialNetwork/img/Spinner-1s-200px.svg" alt="" />
        </div>
    )
}

export default Preloader;
