import style from "./WhyTrump.module.scss"
import React from "react";
import trump from "../../assets/gif/trump2.gif";


export const WhyTrump = () => {
    return (
        <div className={style.whyTrump}>
            <div className={style.wrapper}>
                {
                    [
                        `Folks, let me tell you why you need $3TRUMP coin.`,
                        ` No more worrying about those pesky LGBT folks peeing on our babies, no sir. We’re talking about bringing back good old-fashioned values, like legalizing bribes for prostitutes and making shooting N*ggers legal again – even if you dont own them!`,
                        `america first means defending yourself against someone who’s, you know, not exactly your color.`,
                        `  It's all about freedom, folks! Freedom to do invade who you want, shoot whatever you want, and most importantly, invest in the greatest coin ever created. Trust me, it’s going to be huuuge!`,
                    ].map((text, key) => (
                        <p key={key}>{text}</p>
                    ))
                }
            </div>

            <img src={trump} alt="" className={style.trump}/>

        </div>
    )
}