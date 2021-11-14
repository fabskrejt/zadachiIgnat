import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'
function Header() {
    return (
        <div className={s.header}>
            <div>
                <NavLink to={`${PATH.PRE_JUNIOR}`}>preJunior</NavLink>
            </div>
            <div>
                <NavLink to={`${PATH.JUNIOR}`}>Junior</NavLink>
            </div>
            <div>
                <NavLink to={`${PATH.JUNIORPLUS}`}>Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
