import React from 'react'
import { ProfileType } from '../../redux/reducers/profile-reduser'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'

export function Profile(props: { profile: ProfileType }) {
	return (
		<div className={s.profile}>
			<div className={s.cover}>
				<img src='' />
			</div>
			<div className={s.info}>
				<div className={s.avatar}>
					<img src={props.profile.photos.large} />
				</div>
				<div className={s.descr}>
					<div className={s.name}>{props.profile.fullName}</div>
					<div className={s.isWork}>
						<span>Work:</span> {props.profile.lookingForAJob ? 'В поиске' : 'Работаю'}
					</div>
					<div className={s.workStatus}>{props.profile.lookingForAJobDescription}</div>
					<div className={s.contacts}>
						{props.profile.contacts.facebook ? (
							<a className={s.contact} href={props.profile.contacts.facebook}>
								facebook
							</a>
						) : (
							''
						)}
						{props.profile.contacts.github ? (
							<a className={s.contact} href={props.profile.contacts.github}>
								github
							</a>
						) : (
							''
						)}
						{props.profile.contacts.instagram ? (
							<a className={s.contact} href={props.profile.contacts.instagram}>
								instagram
							</a>
						) : (
							''
						)}
						{props.profile.contacts.mainLink ? (
							<a className={s.contact} href={props.profile.contacts.mainLink}>
								mainLink
							</a>
						) : (
							''
						)}
						{props.profile.contacts.twitter ? (
							<a className={s.contact} href={props.profile.contacts.twitter}>
								twitter
							</a>
						) : (
							''
						)}
						{props.profile.contacts.vk ? (
							<a className={s.contact} href={props.profile.contacts.vk}>
								vk
							</a>
						) : (
							''
						)}
						{props.profile.contacts.website ? (
							<a className={s.contact} href={props.profile.contacts.website}>
								website
							</a>
						) : (
							''
						)}
						{props.profile.contacts.youtube ? (
							<a className={s.contact} href={props.profile.contacts.youtube}>
								youtube
							</a>
						) : (
							''
						)}
					</div>
				</div>
			</div>

			<MyPostsContainer />
		</div>
	)
}
