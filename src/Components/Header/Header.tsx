import React from 'react';
import s from "./Header.module.css"
const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png"
                 alt="logo"/>
        </header>
    );
};

export default Header;