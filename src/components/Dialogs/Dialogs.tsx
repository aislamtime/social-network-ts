import React from 'react';
import { NavLink } from 'react-router-dom';
import { isPropertyAccessChain } from 'typescript';
import s from './Dialogs.module.css';

type DialogsItemPropsType = {
	id: number;
	name: string;
};

type MessagePropsType = {
	id: number;
	message: string;
};

export function Dialogs() {
	const dialogs: Array<DialogsItemPropsType> = [
		{ id: 1, name: 'Andrey' },
		{ id: 2, name: 'Nikita' },
		{ id: 3, name: 'Sasha' },
		{ id: 4, name: 'Nika' },
		{ id: 5, name: 'Tima' },
		{ id: 6, name: 'Nastya' },
	];

	const messages: Array<MessagePropsType> = [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Yo! Wats up?' },
		{ id: 4, message: 'Yo' },
	];

	const dialogsElements = dialogs.map((el) => (
		<DialogsItem name={el.name} id={el.id} />
	));
	const messagesElements = messages.map((el) => (
		<Message id={el.id} message={el.message} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
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
