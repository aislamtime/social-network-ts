import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Content.module.css';
import { Profile } from '../Profile/Profile';
import { Dialogs } from '../Dialogs/Dialogs';
import { News } from '../News/News';
import { Music } from '../Music/Music';
import { Settings } from '../Settings/Settings';
import { RootStateType } from '../../redux/state';

type ContentPropsType = {
	state: RootStateType;
	addPost: (newMessage: string) => void;
};

export function Content(props: ContentPropsType) {
	return (
		<div className={s.content}>
			<Routes>
				<Route
					path='/'
					element={
						<Profile
							profilePage={props.state.profilePage}
							addPost={props.addPost}
						/>
					}
				/>
				<Route
					path='/dialogs'
					element={<Dialogs dialogsPage={props.state.dialogsPage} />}
				/>
				<Route path='/news' element={<News />} />
				<Route path='/music' element={<Music />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</div>
	);
}