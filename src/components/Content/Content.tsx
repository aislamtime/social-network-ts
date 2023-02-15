import React from 'react'
import { Route, Routes } from 'react-router-dom'

import s from './Content.module.css'
import { News, Music, Settings, Profile, Dialogs } from '../'
import UsersConstainer from '../Users/UsersContainer'

export function Content() {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/dialogs' element={<Dialogs />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/users' element={<UsersConstainer />} />
      </Routes>
    </div>
  )
}
