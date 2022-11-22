import React from 'react';
import { ProfilePageType } from '../../redux/state';
import { Post } from '../Post/Post';
import s from './Profile.module.css';

type ProfilePropsType = {
	state: ProfilePageType;
};

export function Profile(props: ProfilePropsType) {
	const postsElements = props.state.posts.map((el) => <Post state={el} />);

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
				<div className={s.myPostsTitle}>My posts</div>
				<div className={s.inputAndButton}>
					<textarea
						cols={60}
						rows={3}
						className={s.input}
						name=''
						id=''
					></textarea>
					<button className={s.buttonSend}>Send</button>
				</div>
				<div className={s.posts}>{postsElements}</div>
			</div>
		</div>
	);
}
