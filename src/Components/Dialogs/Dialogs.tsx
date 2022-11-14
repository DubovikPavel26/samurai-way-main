import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

type dialogsDataType = {
    id: string
    name: string
}

type messageDataType = {
    id: string
    message: string
}

const Dialog = (props: DialogPropsType) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        )

}

type MessagesPropsType = {
    message: string
}

const Messages = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    const dialogs: Array<dialogsDataType> = [
        {id: '1',name: "Pasha"},
        {id: '2',name: "Dima"},
        {id: '3',name: "Sasha"},
        {id: '5',name: "Dasha"},
        {id: '6',name: "Glasha"}
    ]

    const message: Array<messageDataType> = [
        {id: '1',message: "Hello"},
        {id: '2',message: "How are you"},
        {id: '3',message: "Mean"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.users}>

                {dialogs.map(el => {
                    return (
                        <Dialog name={el.name} id={el.id}/>
                    )
                })}

            </div>
            <div className={s.messeges}>

                {message.map(el => {
                    return (
                        <Messages message={el.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;