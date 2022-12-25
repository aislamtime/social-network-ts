import React from 'react'
import { Route, Routes } from 'react-router-dom'
import s from './Content.module.css'
import { Profile } from '../Profile/Profile'
import { News } from '../News/News'
import { Music } from '../Music/Music'
import { Settings } from '../Settings/Settings'
import { DialogsContainer } from '../Dialogs/DialogsContainer'

export function Content() {
	return (
		<div className={s.content}>
			<Routes>
				<Route path='/' element={<Profile />} />
				<Route path='/dialogs' element={<DialogsContainer />} />
				<Route path='/news' element={<News />} />
				<Route path='/music' element={<Music />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</div>
	)
}
