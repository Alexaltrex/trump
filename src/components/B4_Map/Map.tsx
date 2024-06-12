import style from "./Map.module.scss";
import top from "../../assets/png/map/top.png";
import title from "../../assets/png/map/title.png";
import text_0_d from "../../assets/png/map/text_0_d.png";
import text_1_d from "../../assets/png/map/text_1_d.png";
import text_2_d from "../../assets/png/map/text_2_d.png";
import text_3_d from "../../assets/png/map/text_3_d.png";
import text_0_m from "../../assets/png/map/text_0_m.png";
import text_1_m from "../../assets/png/map/text_1_m.png";
import text_2_m from "../../assets/png/map/text_2_m.png";
import text_3_m from "../../assets/png/map/text_3_m.png";
import trump_back from "../../assets/png/map/trump_back.png";
import trump from "../../assets/gif/trump5.gif";

export const TrumpMap = () => {
    return (
        <div className={style.map}>
            <img src={top} alt="" className={style.top}/>
            <img src={title} alt="" className={style.title}/>

            <img src={trump} alt="" className={style.trump}/>
            <img src={trump_back} alt="" className={style.trump_back}/>



            <img src={text_0_d} alt="" className={style.text_0_d}/>
            <img src={text_1_d} alt="" className={style.text_1_d}/>
            <img src={text_2_d} alt="" className={style.text_2_d}/>
            <img src={text_3_d} alt="" className={style.text_3_d}/>

            <img src={text_0_m} alt="" className={style.text_0_m}/>
            <img src={text_1_m} alt="" className={style.text_1_m}/>
            <img src={text_2_m} alt="" className={style.text_2_m}/>
            <img src={text_3_m} alt="" className={style.text_3_m}/>
        </div>
    )
}