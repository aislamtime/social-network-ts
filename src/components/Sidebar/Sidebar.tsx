import React from "react";
import s from './Sidebar.module.css';

export function Sidebar() {
	return (
		<nav className={s.sidebar}>
			<div className="sidebar__item">
				<a href="/" className={s.link}>
					Profile
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className={s.link}>
					Messages
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className={s.link}>
					News
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className={s.link}>
					Musics
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className={s.link}>
					Settings
				</a>
			</div>
		</nav>
	);
}
