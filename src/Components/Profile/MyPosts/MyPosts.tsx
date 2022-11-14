import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./post/Post";
import {profilePageType} from "../../../redux/State";

const MyPosts = (props: profilePageType) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>New posts</div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add posts</button>
            </div>

            <div className={s.posts}>
                {props.posts.map(el => {
                    return (
                        <Post title={el.title} number={el.number}/>
                    )
                })}
            </div>

        </div>
    );
};

export default MyPosts;