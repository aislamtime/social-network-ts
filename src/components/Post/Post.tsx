import React from 'react';
import s from './Post.module.css';

type PropsType = {
	message: string;
};

export function Post(props: PropsType) {
	return (
		<div className={s.post}>
			<div className={s.item}>
				<img
					src='https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
					alt=''
					className={s.avatar}
				/>
				<div className={s.text}>{props.message}</div>
				<div className={s.delete}>Delete post</div>
			</div>
		</div>
	);
}
