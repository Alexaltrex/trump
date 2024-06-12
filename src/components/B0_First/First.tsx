import style from "./First.module.scss"
import React from "react";
import trump0 from "../../assets/gif/trump0.gif";
import title from "../../assets/png/first/title.png";

export const First = () => {
    return (
        <div className={style.first}>
            <div className={style.trumpWrapper}>
                <img src={trump0} alt="" className={style.trump}/>
            </div>
            <img src={title} alt="" className={style.title}/>

            <div className={style.text}>
                <p>$3Trump and let him do what he wants without judgement!</p>
            </div>
        </div>
    )
}