import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.theme); // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect onChangeOption={onChangeCallback} options={themes}/>
            <hr/>
        </div>
    );
}

export default HW12;
