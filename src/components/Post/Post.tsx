import React from 'react';
import s from './Post.module.css';

type PropsType = {
	message: string;
};

export function Post(props: PropsType) {
	return (
		<div className={s.item}>
			<img src='' alt='' className={s.avatar} />
			<div className={s.text}>{props.message}</div>
		</div>
	);
}
