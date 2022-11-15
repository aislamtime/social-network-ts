import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

export function Sidebar() {
	return (
		<nav className={s.sidebar}>
			<ul>
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
		</nav>
	);
}
