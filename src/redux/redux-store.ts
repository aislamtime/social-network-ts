import { configureStore } from '@reduxjs/toolkit'
import dialogsReduser from './reducers/dialogs-reduser'
import profileReduser from './reducers/profile-reduser'
import sidebarReduser from './reducers/sidebar-reduser'
import usersReduser from './reducers/user-reduser'

export const store = configureStore({
	reducer: {
		profilePage: profileReduser,
		dialogsPage: dialogsReduser,
		sidebar: sidebarReduser,
		userPage: usersReduser,
	},
})

export type RootStateType = ReturnType<typeof store.getState>
