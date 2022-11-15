import React from 'react';
import { NavLink } from 'react-router-dom';
import { isPropertyAccessChain } from 'typescript';
import s from './Dialogs.module.css';

type DialogsItemPropsType = {
	name: string;
	id: string;
};

type MessagePropsType = {
	message: string;
};

export function Dialogs() {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogsItem name='Andrey' id='1' />
				<DialogsItem name='Nikita' id='2' />
				<DialogsItem name='Sasha' id='3' />
				<DialogsItem name='Nika' id='4' />
				<DialogsItem name='Tima' id='5' />
				<DialogsItem name='Nastya' id='6' />
			</div>
			<div className={s.messages}>
				<Message message='Hi!' />
				<Message message='How are you?' />
				<Message message='Yo! Wats up?' />
			</div>
		</div>
	);
}

function DialogsItem(props: DialogsItemPropsType) {
	const path = '/dialogs/' + props.id;

	return (
		<div className={s.item}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

function Message(props: MessagePropsType) {
	return <div className={s.message}>{props.message}</div>;
}
