import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogsPageType, DialogType, MessageType } from '../../redux/state';
import s from './Dialogs.module.css';

type DialogsPropsType = {
	dialogsPage: DialogsPageType;
};

export function Dialogs(props: DialogsPropsType) {
	const dialogsElements = props.dialogsPage.dialogs.map((el) => (
		<DialogsItem name={el.name} id={el.id} />
	));
	const messagesElements = props.dialogsPage.messages.map((el) => (
		<Message id={el.id} message={el.message} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div className={s.addMessageBlock}>
					<input type='text' className={s.addMessageInput} />
					<button className={s.addMessageButton}>Send</button>
				</div>
			</div>
		</div>
	);
}

function DialogsItem(props: DialogType) {
	const path = '/dialogs/' + props.id;

	return (
		<div className={s.item}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

function Message(props: MessageType) {
	return (
		<div className={s.message}>
			<img
				src='https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
				alt=''
				className={s.avatar}
			/>
			<div className={s.messageBlock}>
				<div className={s.name}>Nikitos</div>
				<div className={s.text}>{props.message}</div>
				<div className={s.time}>12:30</div>
			</div>
		</div>
	);
}
