import React from 'react'
import { Route, Routes } from 'react-router-dom'

import s from './Content.module.css'
import { News, Music, Settings, Profile } from '../'
import DialogsContainer from '../Dialogs/DialogsContainer'
import UsersConstainer from '../Users/UsersContainer'

export function Content() {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/dialogs' element={<DialogsContainer />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/users' element={<UsersConstainer />} />
      </Routes>
    </div>
  )
}
