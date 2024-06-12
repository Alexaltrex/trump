import style from "./Header.module.scss"
import React from "react";
import back_m from "../../assets/png/header/background_m.png";
import back_d from "../../assets/png/header/background_d.png";
import logo from "../../assets/png/header/logo.png";


export const Header = () => {
    return (
        <header className={style.header}>
            <img src={back_m} alt="" className={style.back_m}/>
            <img src={back_d} alt="" className={style.back_d}/>
            <img src={logo} alt="" className={style.logo}/>

            <div className={style.socialLinks}>
                {
                    [
                        "#",
                        "#"
                    ].map((href, key) => (
                        <a key={key} href={href}/>
                    ))
                }
            </div>
        </header>
    )
}