import React from "react";
import style from "./Trumponomics.module.scss"
import title from "../../assets/png/trumponomics/title.png"
import trump from "../../assets/gif/trump3.gif";
import portrait_title from "../../assets/png/trumponomics/portrait_title.png";
import portrait_back from "../../assets/png/trumponomics/portrait_back.png";
import table from "../../assets/png/trumponomics/table.png";
import btn from "../../assets/png/trumponomics/button.png";
import bottom from "../../assets/png/trumponomics/bottom.png";

export const Trumponomics = () => {
    return (
        <div className={style.trumponomics}>
            <img src={title} alt="" className={style.title}/>

            <div className={style.portraitWrapper}>
                <img src={portrait_back} alt="" className={style.portrait_back}/>
                <div className={style.trumpWrapper}>
                    <img src={trump} alt="" className={style.trump}/>
                </div>
                <img src={portrait_title} alt="" className={style.portrait_title}/>
            </div>

            <p className={style.text}>
                With $3TRUMP, the supply is as limitless as my Twitter rants, and the distribution is as fair as my tax returns. Every coin is backed by the US ARMY so 100% pure ego and with the promise of invading china!
            </p>

            <img src={table} alt="" className={style.table}/>

            <p className={style.address}>
                ca: <span>6yjNqPzTSanBWSa6dxVEgTjePXBrw3FouLeQwYsEsyM4</span>
            </p>

            <a href="#" className={style.btn}>
                <img src={btn} alt=""/>
            </a>

            <img src={bottom} alt="" className={style.bottom}/>
        </div>
    )
}