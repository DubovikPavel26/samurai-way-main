import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}



const DialogItem = (props: DialogItemPropsType) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        )

}


export default DialogItem;