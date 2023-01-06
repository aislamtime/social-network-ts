import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'
import userPhoto from './../../assets/images/user.png'

export function Usersm(props: UsersPropsType) {
	//! console.log('Users rendering')

	//axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
	//	props.setUsers(response.data.items)
	//})

	//if (props.items.length === 0) {
	//	props.setUsers([
	//		{
	//			name: 'Shubert',
	//			id: 1,
	//			photos: {
	//				small: '',
	//				large: '',
	//			},
	//			status: '',
	//			followed: false,
	//		},
	//		{
	//			name: 'Hacker',
	//			id: 2,
	//			photos: {
	//				small: '',
	//				large: '',
	//			},
	//			status: '',
	//			followed: false,
	//		},
	//	])
	//}

	return (
		<div className={s.main}>
			{props.items.map((u) => {
				return (
					<div key={u.id} className={s.user}>
						<div className={s.ava_and_btn}>
							<div className={s.user_photo}>
								<img src={u.photos.small ? u.photos.small : userPhoto} alt='photo' />
							</div>
							{u.followed ? (
								<button className={s.follow_btn} onClick={() => props.unfollow(u.id)}>
									Unfollow
								</button>
							) : (
								<button className={s.follow_btn} onClick={() => props.follow(u.id)}>
									Follow
								</button>
							)}
						</div>
						<div className={s.descr}>
							<div className={s.name}>{u.name}</div>
							<div className={s.status}>{u.status}</div>
							<div className={s.city}>{'should be city here'}</div>
							<div className={s.country}>{'should be country here'}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
