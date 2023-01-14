import React from 'react'
import { Route, Routes } from 'react-router-dom'
import s from './Content.module.css'
import { News } from '../News/News'
import { Music } from '../Music/Music'
import { Settings } from '../Settings/Settings'
import DialogsContainer from '../Dialogs/DialogsContainer'
import UsersConstainer from '../Users/UsersContainer'
import ProfileContainer from '../Profile/ProfileContainer'

export function Content() {
	return (
		<div className={s.content}>
			<Routes>
				<Route path='/profile/*' element={<ProfileContainer />} />
				<Route path='/dialogs' element={<DialogsContainer />} />
				<Route path='/news' element={<News />} />
				<Route path='/music' element={<Music />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/users' element={<UsersConstainer />} />
			</Routes>
		</div>
	)
}
