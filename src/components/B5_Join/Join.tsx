import style from "./Join.module.scss"
import React from "react";
import trump from "../../assets/gif/trump6.gif";
import house from "../../assets/png/join/house.png";
import title from "../../assets/png/join/title.png";

export const Join = () => {
    return (
        <div className={style.join}>
            <img src={title} alt="" className={style.title}/>
            <img src={house} alt="" className={style.house}/>
            <img src={trump} alt="" className={style.trump}/>

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

        </div>
    )
}