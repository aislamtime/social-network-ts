import React, { useRef } from 'react';
import s from './MyPosts.module.css';
import { addPostAC, AllActionsType, PostType } from './../../../redux/state';
import { Post } from './Post/Post';

type MyPostsType = {
    posts: Array<PostType>;
    dispatch: (action: AllActionsType) => void;
};



export function MyPosts(props: MyPostsType) {
    const postsElements = props.posts.map((el) => <Post state={el} />);

    const textareaElementRef = React.createRef<HTMLTextAreaElement>();

    const onAddPostClickHandler = () => {
        if (textareaElementRef.current) {
            const newPostText = textareaElementRef.current.value;
            props.dispatch(addPostAC(newPostText));
            textareaElementRef.current.value = '';
        }
    };

    return (
        <div className={s.myPosts}>
            <div className={s.myPostsTitle}>My posts</div>
            <div className={s.inputAndButton}>
                <textarea className={s.input} ref={textareaElementRef}></textarea>
                <button className={s.buttonSend} onClick={onAddPostClickHandler}>
                    Send
                </button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}
