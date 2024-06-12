import style from "./HowToBuy.module.scss"
import React from "react";
import title from "../../assets/png/how to buy/title.png";
import logo from "../../assets/png/header/logo.png";
import trump from "../../assets/gif/trump1.gif";
import btn from "../../assets/png/how to buy/button.png"
import bottom from "../../assets/png/how to buy/bottom.png"
import back from "../../assets/gif/howToBuy.gif";
import figure from "../../assets/gif/figure.gif";

export const HowToBuy = () => {
    return (
        <div className={style.howToBuy}>


            <img src={figure} alt="" className={style.figure}/>
            <img src={back} alt="" className={style.back}/>

            <img src={title} alt="" className={style.title}/>
            <img src={logo} alt="" className={style.logo}/>
            <img src={trump} alt="" className={style.trump}/>

            <div className={style.wrapper}>
                <div className={style.texts}>
                    {
                        [
                            `1. Download Phantom: because even Sleepy Joe Biden managed to do it.`,
                            `2. Transfer Solana from your exchange  (it’s easier than sending aid money to Ukraine)`,
                            `3. Go to your wallet, click swap, paste the $3TRUMP cA (it's like swapping Money for Sex) - best investment ever.`,
                        ].map((text, key) => (
                            <p key={key}>{text}</p>
                        ))
                    }
                </div>
                <button>
                    <img src={btn} alt=""/>
                </button>
            </div>

            <img src={bottom} alt="" className={style.bottom}/>
        </div>
    )
}