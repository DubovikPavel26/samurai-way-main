import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={s.user + " " + s.active}>
                    Dima
                </div>
                <div className={s.user}>
                    Pasha
                </div>
                <div className={s.user}>
                    Sasha
                </div>
                <div className={s.user}>
                    Liza
                </div>
                <div className={s.user}>
                    Yana
                </div>
                <div className={s.user}>
                    Danik
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