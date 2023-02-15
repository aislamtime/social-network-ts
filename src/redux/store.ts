import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

//import { authReduser } from './reducers/auth-reduser'
//import { dialogsReduser } from './reducers/dialogs-reduser'
//import { profileReduser } from './reducers/profile-reduser'
//import { sidebarReduser } from './reducers/sidebar-reduser'
import { usersReduser } from './reducers/users-reduser'
import auth from './slices/auth/slice'
import profile from './slices/profile/slice'
import dialogs from './slices/dialogs/slice'
import sidebar from './slices/sidebar/slice'

export const store = configureStore({
  reducer: {
    profile,
    usersPage: usersReduser,
    dialogs,
    sidebar,
    auth,
  },
})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
//export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
