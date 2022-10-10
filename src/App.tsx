import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/news/news";
import Music from "./Components/music/music";
import Settings from "./Components/settings/settings";


const App = () => {
    return (
        <BrowserRouter>
        <div className={"app-wrapper"}>
            <Header/>
            <Nav/>
            <div className={"app-wrapper-content"}>
                <Route path={"/profile"} component={Profile}/>
                <Route path={"/dialogs"} component={Dialogs}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>
            </div>
        </div>
            </BrowserRouter>
    );
}


export default App;

