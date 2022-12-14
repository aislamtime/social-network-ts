import React from 'react'
import { PostType } from '../../../redux/reducers/profile-reduser'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type MyPostsType = {
	posts: Array<PostType>
	inputValue: string
	addPost: () => void
	changeNewPostText: (newPostText: string) => void
}

export function MyPosts(props: MyPostsType) {
	const postsElements = props.posts.map((el) => <Post state={el} />)
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
