import React from "react";
import s from './MyPosts.module.css';
import { PostType } from './../../../redux/state';
import { Post } from './Post/Post';

type MyPostsType = {
  posts: Array<PostType>
}

export function MyPosts(props: MyPostsType) {

  const postsElements = props.posts.map((el) => <Post state={el} />);

  return (
    <div className={s.myPosts}>
      <div className={s.myPostsTitle}>My posts</div>
      <div className={s.inputAndButton}>
        <textarea className={s.input} name='' id=''></textarea>
        <button className={s.buttonSend}>Send</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}