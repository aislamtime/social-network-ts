import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import auth from './slices/auth/slice'
import profile from './slices/profile/slice'
import dialogs from './slices/dialogs/slice'
import sidebar from './slices/sidebar/slice'
import users from './slices/users/slice'

export const store = configureStore({
  reducer: {
    profile,
    users,
    dialogs,
    sidebar,
    auth,
  },
})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
//export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
