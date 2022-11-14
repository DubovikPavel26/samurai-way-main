import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./post/Post";


type postDataType = {
    id: string
    title: string
    number: number
}
const MyPosts = () => {

    const posts: Array<postDataType> = [
        {id: '1', title: "Hi, how are you?", number: 15},
        {id: '2', title: "Its my first post", number: 20}
    ]
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
                {/*<Post title={postsData[0].title} number={postsData[0].number}/>*/}
                {/*<Post title={postsData[1].title} number={postsData[1].number}/>*/}
                {posts.map(el => {
                    return (
                        <Post title={el.title} number={el.number}/>
                    )
                })}
            </div>

        </div>
    );
};

export default MyPosts;