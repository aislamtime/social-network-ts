import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import { UserType } from '../../redux/reducers/users-reduser'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

export type UsersPropsType = {
	onPageNumberChange: (page: number) => void
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	items: Array<UserType>
	totalCount: number
	pageSize: number
	currentPage: number
	followers: number[]
	toggleFollowingProgress: (userId: number, isFetching: boolean) => void
}

export function Users(props: UsersPropsType) {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize)
	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

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
								<NavLink to={`/profile/${u.id}`}>
									<img src={u.photos.small ? u.photos.small : userPhoto} alt='photo' />
								</NavLink>
							</div>
							{u.followed ? (
								<button
									disabled={props.followers.some((id) => id === u.id)}
									className={s.follow_btn}
									onClick={() => {
										props.toggleFollowingProgress(u.id, true)
										usersAPI.unfollow(u.id).then((data) => {
											if (data.resultCode === 0) props.unfollow(u.id)
											props.toggleFollowingProgress(u.id, false)
										})
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followers.some((id) => id === u.id)}
									className={s.follow_btn}
									onClick={() => {
										props.toggleFollowingProgress(u.id, true)
										usersAPI.follow(u.id).then((data) => {
											if (data.resultCode === 0) props.follow(u.id)
											props.toggleFollowingProgress(u.id, false)
										})
									}}
								>
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
