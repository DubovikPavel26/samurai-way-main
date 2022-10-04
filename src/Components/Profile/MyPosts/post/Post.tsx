import React from 'react';
import s from "./Post.module.css"

type PostType = {
    title: string
    number: number
}

const Post = (props: PostType ) => {
    return <div className={s.item}>
        <img src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480" alt="logo"/>
        {props.title}
        <div><span>like {props.number}</span></div>
    </div>
};

export default Post;