import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/png/header/logo.png";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <img src={logo} alt="" className={style.logo}/>

            <div className={style.data}>
                <p>
                    <span>ca:</span> 6yjNqPzTSanBWSa6dxVEgTjePXBrw3FouLeQwYsEsyM4
                </p>
                <p>
                    EMAIL: DONALD@3TRUMP.IO
                </p>
            </div>

        </footer>
    )
}