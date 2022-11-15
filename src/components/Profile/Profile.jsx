import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  



  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPosts posts={props.posts} newPostChange={props.newPostChange} dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
