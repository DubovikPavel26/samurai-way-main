import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType, messageDataType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messageDataType>
}


const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>

                {props.dialogs.map(el => {
                    return (
                        <DialogItem name={el.name} id={el.id}/>
                    )
                })}

            </div>
            <div className={s.messeges}>

                {props.messages.map(el => {
                    return (
                        <Message message={el.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;