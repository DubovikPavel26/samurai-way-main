import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./post/Post";

const MyPosts = () => {

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
                <Post title={"Hi, how are you?"} number={15}/>
                <Post title={"Its my first post"} number={20}/>
            </div>

        </div>
    );
};

export default MyPosts;