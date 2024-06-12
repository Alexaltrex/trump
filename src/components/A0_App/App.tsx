import React from 'react';
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {First} from "../B0_First/First";
import {RunningString} from "../_common/RunningString/RunningString";
import {HowToBuy} from "../B1_HowToBuy/HowToBuy";
import {WhyTrump} from "../B2_WhyTrump/WhyTrump";
import {Trumponomics} from "../B3_Trumponomics/Trumponomics";
import {TrumpMap} from "../B4_Map/Map";
import {Join} from "../B5_Join/Join";
import {Footer} from "../A2_Footer/Footer";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <First/>
            <RunningString have={false}/>
            <HowToBuy/>
            <WhyTrump/>
            <RunningString/>
            <Trumponomics/>
            <TrumpMap/>
            <RunningString have={false}/>
            <Join/>
            <RunningString/>
            <Footer/>
        </div>
    );
}

