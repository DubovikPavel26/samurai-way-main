import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, StateType} from "./redux/State";

export let renderEntireThree = (state:StateType) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost} />,
        document.getElementById('root')
    )
}
