import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./post/Post";
import {profilePageType} from "../../../redux/State";

const MyPosts = (props: profilePageType) => {
const linka = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
    let text = linka.current?.value;
    alert(text)
}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>New posts</div>
            <div>
                <textarea ref={linka}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add posts</button>
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