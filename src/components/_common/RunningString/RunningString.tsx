import style from "./RunningString.module.scss"
import {RunningStringItem} from "../RunningStringItem/RunningStringItem";
import star from "../../../assets/png/running string/star.png";
import clsx from "clsx";
import {FC} from "react";

interface IRunningString {
    have?: boolean
}

export const RunningString: FC<IRunningString> = ({
                                                      have = true
                                                  }) => {
    return (
        <div className={style.runningString}>
            <RunningStringItem item={(
                <div className={style.item}>
                    <img src={star} alt="" className={style.star}/>
                    <p className={clsx(style.text, style.text_red)}>3 trump</p>
                    <img src={star} alt="" className={style.star}/>
                    <p className={style.text}>
                        {
                            have
                                ? `i did have sexual relations with that woman`
                                : `i did not have sexual relations with that woman`
                        }
                    </p>
                </div>
            )}
                               forward={false}
                               duration={60}
                               count={3}
            />
        </div>
    )
}