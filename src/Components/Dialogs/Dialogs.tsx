import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogPageType} from "../../redux/State";

const Dialogs = (props: dialogPageType) => {
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