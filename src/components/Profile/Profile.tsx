import React from 'react'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
export function Profile() {
	return (
		<div className={s.profile}>
			<div className={s.cover}>
				<img src='' alt='' />
			</div>
			<div className={s.info}>
				<div className={s.avatar}>
					<img
						src='https://cdn.dribbble.com/users/3030608/screenshots/15223665/media/ecd75381aa7a354c78a4ed2aee65bd0f.jpg?compress=1&resize=400x300&vertical=top'
						alt=''
					/>
				</div>
				<div className='profile__description'></div>
			</div>

			<MyPostsContainer />
		</div>
	)
}
