import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
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
        <div className={s.messege}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Dialog name={"Pasha"} id={"1"}/>
                <Dialog name={"Dima"} id={"2"}/>
                <Dialog name={"Sasha"} id={"3"}/>
                <Dialog name={"Masha"} id={"4"}/>
                <Dialog name={"Dasha"} id={"5"}/>
                <Dialog name={"Glasha"} id={"6"}/>
            </div>
            <div className={s.messeges}>
                <Messages message={"Hello"}/>
                <Messages message={"How are you"}/>
                <Messages message={"Mean"}/>
            </div>
        </div>
    );
};

export default Dialogs;