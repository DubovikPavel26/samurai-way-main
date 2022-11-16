import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./post/Post";
import {postType, profilePageType} from "../../../redux/State";

type MyPostType = {
    posts: postType[]
    addPost: (message: string) => void
}
const MyPosts = (props: MyPostType) => {

    const linka = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        debugger
        if(linka.current){
            props.addPost(linka.current.value)
        }

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