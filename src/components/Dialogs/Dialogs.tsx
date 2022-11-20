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

export function Dialogs(props: any) {
	const dialogsElements = props.dialogs.map((el) => (
		<DialogsItem name={el.name} id={el.id} />
	));
	const messagesElements = props.messages.map((el) => (
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
