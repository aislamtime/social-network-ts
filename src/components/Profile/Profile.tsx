import React from 'react';
import { Post } from '../Post/Post';
import s from './Profile.module.css';

export function Profile() {
	const posts = [
		{ id: 1, message: 'I am from Mars', likeCount: 13 },
		{ id: 2, message: 'My name is Alesha', likeCount: 18 },
		{ id: 3, message: 'Hi, how are you?', likeCount: 16 },
		{ id: 4, message: "Hey, it's my first app!", likeCount: 32 },
	];

	const postsElements = posts.map((el) => <Post message={el.message} />);

	return (
		<div className={s.profile}>
			<div className={s.cover}>
				<img src='' alt='' />
			</div>
			<div className='profile__info'>
				<div className={s.avatar}>
					<img
						src='https://cdn.dribbble.com/users/3030608/screenshots/15223665/media/ecd75381aa7a354c78a4ed2aee65bd0f.jpg?compress=1&resize=400x300&vertical=top'
						alt=''
					/>
				</div>
				<div className='profile__description'></div>
			</div>
			<div className='profile__posts posts'>
				<div className='posts__title'>My posts</div>
				<div className='posts__add'>
					<textarea className={s.input} name='' id=''></textarea>
					<button className='add-new-post btn'>Send</button>
				</div>
				<div className={s.posts}>{postsElements}</div>
			</div>
		</div>
	);
}
