import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

export function Sidebar() {
	return (
		<nav className={s.sidebar}>
			<ul className={s.links}>
				<li className={s.link}>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? s.active : undefined)}
					>
						Profile
					</NavLink>
				</li>
				<li className={s.link}>
					<NavLink
						to='/dialogs'
						className={({ isActive }) => (isActive ? s.active : undefined)}
					>
						Messages
					</NavLink>
				</li>
				<li className={s.link}>
					<NavLink
						to='/news'
						className={({ isActive }) => (isActive ? s.active : undefined)}
					>
						News
					</NavLink>
				</li>
				<li className={s.link}>
					<NavLink
						to='/music'
						className={({ isActive }) => (isActive ? s.active : undefined)}
					>
						Music
					</NavLink>
				</li>
				<li className={s.link}>
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? s.active : undefined)}
					>
						Settings
					</NavLink>
				</li>
			</ul>

			<MyFriends />
		</nav>
	);
}

function MyFriends() {
	return (
		<div className={s.friendsBlock}>
			<div className={s.friendsBlockTitle}>My friends</div>
			<div className={s.friendsRow}>
				<div className={s.friendsBlockItem}>
					<img
						src='https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
						alt=''
						className={s.friendAvatar}
					/>
				</div>
				<div className={s.friendsBlockItem}>
					<img
						src='https://cs4.pikabu.ru/post_img/2014/05/05/0/1399234955_1219560351.jpg'
						alt=''
						className={s.friendAvatar}
					/>
				</div>
				<div className={s.friendsBlockItem}>
					<img
						src='https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg'
						alt=''
						className={s.friendAvatar}
					/>
				</div>
			</div>
		</div>
	);
}
