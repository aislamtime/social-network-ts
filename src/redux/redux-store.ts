import { configureStore } from '@reduxjs/toolkit'
import authReduser from './reducers/auth-reduser'
import dialogsReduser from './reducers/dialogs-reduser'
import profileReduser from './reducers/profile-reduser'
import sidebarReduser from './reducers/sidebar-reduser'
import usersReduser from './reducers/users-reduser'

export const store = configureStore({
	reducer: {
		profilePage: profileReduser,
		dialogsPage: dialogsReduser,
		sidebar: sidebarReduser,
		usersPage: usersReduser,
		auth: authReduser,
	},
})

export type RootStateType = ReturnType<typeof store.getState>
