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
import {StateType} from "./redux/State";


type AppPropsType = {
    appState: StateType
    addPost: (message: string) => void
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
        <div className={"app-wrapper"}>
            <Header/>
            <Nav/>
            <div className={"app-wrapper-content"}>
                <Route path={"/profile"} render={() => <Profile posts={props.appState.profilePage.posts} addPost={props.addPost}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.appState.dialogPage.dialogs} messages={props.appState.dialogPage.messages}/>}/>
                <Route path={"/news"}  render={() => <News/>}/>
                <Route path={"/music"}  render={() => <Music/>}/>
                <Route path={"/settings"}  render={() => <Settings/>}/>
            </div>
        </div>
            </BrowserRouter>
    );
}


export default App;

