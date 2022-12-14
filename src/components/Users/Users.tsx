import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
//import { UsersPropsType } from './UsersContainer'
import userPhoto from './../../assets/images/user.png'
import { UserType } from '../../redux/reducers/users-reduser'

export type UsersPropsType = {
	onPageNumberChange: (page: number) => void
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	items: Array<UserType>
	totalCount: number
	pageSize: number
	currentPage: number
}

export function Users(props: UsersPropsType) {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize)
	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	console.log(pages)

	return (
		<div className={s.main}>
			<div>
				{pages.map((p) => {
					return (
						<span
							className={`${props.currentPage === p ? s.selected : ''} ${s.changePage}`}
							onClick={() => {
								props.onPageNumberChange(p)
							}}
						>
							{p}
						</span>
					)
				})}
			</div>
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
