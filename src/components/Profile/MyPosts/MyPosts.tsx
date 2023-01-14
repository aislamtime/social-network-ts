import React from 'react'
import s from './MyPosts.module.css'
import { MyPostsPropsType } from './MyPostsContainer'
import { Post } from './Post/Post'

export function MyPosts(props: MyPostsPropsType) {
	const postsElements = props.posts.map((el) => <Post key={el.id} state={el} />)
	return (
		<div className={s.myPosts}>
			<div className={s.myPostsTitle}>My posts</div>
			<div className={s.inputAndButton}>
				<textarea
					className={s.input}
					value={props.inputValue}
					onChange={(e) => props.changeNewPostText(e.currentTarget.value)}
				/>
				<button className={s.buttonSend} onClick={() => props.addPost()}>
					Send
				</button>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	)
}
