import React from 'react';
import { Profile } from './Profile';
import s from './Content.module.css';

export function Content() {
	return (
		<div className={s.content}>
			<Profile />
		</div>
	);
}
