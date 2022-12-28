import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dialogsReduser from './reducers/dialogs-reduser'
import profileReduser from './reducers/profile-reduser'
import sidebarReduser from './reducers/sidebar-reduser'
import usersReduser from './reducers/users-reduser'

//const reduser = combineReducers({
//	profilePage: profileReduser,
//	dialogsPage: dialogsReduser,
//	sidebar: sidebarReduser,
//	usersPage: usersReduser,
//})

export const store = configureStore({
	reducer: {
		profilePage: profileReduser,
		dialogsPage: dialogsReduser,
		sidebar: sidebarReduser,
		usersPage: usersReduser,
	},
})

export type RootStateType = ReturnType<typeof store.getState>
