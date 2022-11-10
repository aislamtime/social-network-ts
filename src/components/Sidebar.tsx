import React from "react";

export function Sidebar() {
	return (
		<nav className="sidebar">
			<div className="sidebar__item">
				<a href="/" className="sidebar__link">
					Profile
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className="sidebar__link">
					Messages
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className="sidebar__link">
					News
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className="sidebar__link">
					Musics
				</a>
			</div>
			<div className="sidebar__item">
				<a href="/" className="sidebar__link">
					Settings
				</a>
			</div>
		</nav>
	);
}
