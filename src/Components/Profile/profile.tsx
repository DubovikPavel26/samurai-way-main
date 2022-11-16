import React from 'react';
import s from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType, profilePageType} from "../../redux/State";

type profileType = {
    posts: postType[]
    addPost: (message: string) => void
}
const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;