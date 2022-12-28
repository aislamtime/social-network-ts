import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'

export function Users(props: UsersPropsType) {
	//let p = 0
	//if (props.users.length === 0 && p === 0) {
	//	p += 1
	//	console.log(p)

	//	props.setUsers([
	//		{
	//			id: '1',
	//			followed: false,
	//			photoUrl: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg',
	//			firstName: 'Alex',
	//			secondName: 'Snow',
	//			status: 'I am a boss',
	//			location: { city: 'New York', country: 'USA' },
	//		},
	//		{
	//			id: '2',
	//			followed: true,
	//			photoUrl: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg',
	//			firstName: 'John',
	//			secondName: 'Pitt',
	//			status: 'I am a boss too?',
	//			location: { city: 'Paris', country: 'France' },
	//		},
	//		{
	//			id: '3',
	//			followed: false,
	//			photoUrl: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg',
	//			firstName: 'Nik',
	//			secondName: 'Colson',
	//			status: 'I am a boss too ahahaha',
	//			location: { city: 'Miami', country: 'USA' },
	//		},
	//	])
	//}

	console.log(props.users)

	return (
		<div className={s.main}>
			{props.users.map((u) => {
				return (
					<div key={u.id} className={s.user}>
						<div className={s.ava_and_btn}>
							<div className={s.user_photo}>
								<img src={u.photoUrl} alt='photo' />
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
							<div className={s.name}>{u.firstName}</div>
							<div className={s.status}>{u.status}</div>
							<div className={s.city}>{u.location.city}</div>
							<div className={s.country}>{u.location.country}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
