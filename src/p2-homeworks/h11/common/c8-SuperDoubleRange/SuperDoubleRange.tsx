import React, {ChangeEvent} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    max:string
    min: string
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max,...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
       // onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([+e.currentTarget.value, value[1]] )
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
       // onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([value[0], +e.currentTarget.value] )
    }

    //const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback1}
              //  className={finalRangeClassName}
                value={value && value[0]}
            />
            <input
                type={'range'}
                onChange={onChangeCallback2}
              //  className={finalRangeClassName}
                value={value && value[1]}
            />
        </>
    )
/*    return (
        <>
            DoubleRange
        </>
    )*/
}

export default SuperDoubleRange
