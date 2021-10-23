import React from 'react'
import mStyle from './Message.module.css'

type PropsTypeOfMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsTypeOfMessage) {
    return (
        <div className={mStyle.messageBox}>
            <div className={mStyle.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={mStyle.angle}/>
            <div className={mStyle.textBlock}>
                <div>
                    <div className={mStyle.name}>{props.name}</div>
                    <div className={mStyle.message}>{props.message}</div>
                </div>
                <div className={mStyle.sendTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
