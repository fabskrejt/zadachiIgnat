import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.greetingContainer}>
{/*            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>*/}
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} error={error}/>
            <div>
            <SuperButton onClick={addUser}>Add</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
