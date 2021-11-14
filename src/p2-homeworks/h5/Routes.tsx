import React from 'react'
import { Routes,Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/Junior+";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
    // add paths
}

function Routs() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

{/*            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={ <Navigate replace to={PATH.PRE_JUNIOR}/>}/>
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

                <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={ <Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={ <JuniorPlus/>}/>
                // add routes
{/*
                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Routs
