import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/nav";
import Profile from "./Components/Profile/profile";


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}


export default App;

