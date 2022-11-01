import React from 'react';
import s from "./profileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="logo"/>
            <div className={s.description}>ava + descr</div>
        </div>
    );
};

export default ProfileInfo;