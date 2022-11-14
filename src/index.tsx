import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postDataType = {
    id: string
    title: string
    number: number
}

const posts: Array<postDataType> = [
    {id: '1', title: "Hi, how are you?", number: 15},
    {id: '2', title: "Its my first post", number: 20}
]

export type dialogsDataType = {
    id: string
    name: string
}

export type messageDataType = {
    id: string
    message: string
}

const dialogs: Array<dialogsDataType> = [
    {id: '1',name: "Pasha"},
    {id: '2',name: "Dima"},
    {id: '3',name: "Sasha"},
    {id: '5',name: "Dasha"},
    {id: '6',name: "Glasha"}
]

const messages: Array<messageDataType> = [
    {id: '1',message: "Hello"},
    {id: '2',message: "How are you"},
    {id: '3',message: "Mean"},
]



ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);