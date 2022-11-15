import s from './MyPosts.module.css'
import React from 'react';
import Posts from '../postContainer/Posts';
import { addPostActionCreator, lookChangeActionCreator } from '../../../redux/state';



const MyPosts = (props) => {
  let postText = props.posts.map((el) => <Posts text={el.text} />);

  let textNewPost = React.createRef();

  let buttonNewPost = () => {
    props.dispatch(addPostActionCreator);
  };

  let OnPostChange = () => {
    let text = textNewPost.current.value;
    props.dispatch(lookChangeActionCreator(text))
  };
  return (
    <div className={s.main__post}>
      <div className={s.main__post_my}>My posts</div>
      <textarea
        className={s.text__area}
        onChange={OnPostChange}
        value={props.newPostChange}
        ref={textNewPost}
      ></textarea>
      <button onClick={buttonNewPost} className={s.main__post_new}>
        New Post
      </button>
      {postText}
    </div>
  );
};

export default MyPosts