import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={s.user + " " + s.active}>
                    <NavLink to={"/dialogs/1"}>Dima</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to={"/dialogs/2"}>Pasha</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to={"/dialogs/3"}>Sasha</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to={"/dialogs/4"}>Liza</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to={"/dialogs/5"}>Yana</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to={"/dialogs/6"}>Danik</NavLink>
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.messege}>Hello</div>
                <div className={s.messege}>How are you?</div>
                <div className={s.messege}>Mean</div>
            </div>
        </div>
    );
};

export default Dialogs;