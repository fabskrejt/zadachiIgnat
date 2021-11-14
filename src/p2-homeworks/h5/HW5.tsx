import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import Routs from "./Routes";
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.hw5Container}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
<div className={s.ss}>
    <Header/>
</div>


            <Routs/>

            </HashRouter>
        </div>
    )
}

export default HW5
