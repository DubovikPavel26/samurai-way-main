import React from 'react';
import classes from "./nav.module.css"

const Nav = () => {
    return (
        <nav className={classes.nav}>
                <div className={classes.item}><a href="src/Components/Nav/nav#">Profile</a></div>
                <div className={classes.item}><a href="src/Components/Nav/nav#">Messages</a></div>
                <div className={classes.item}><a href="src/Components/Nav/nav#">News</a></div>
                <div className={classes.item}><a href="src/Components/Nav/nav#">Music</a></div>
                <div className={classes.item}><a href="src/Components/Nav/nav#">Settings</a></div>
        </nav>
    );
};

export default Nav;