import { AnyAction } from '@reduxjs/toolkit'

const SET_USER_DATA = 'SET-USER-DATA'

export type AuthUserDataType = {
	userId: number
	email: string
	login: string
	isAuth: boolean
}
const initialState: AuthUserDataType = {
	userId: 0,
	email: '',
	login: '',
	isAuth: false,
}

const authReduser = (state: AuthUserDataType = initialState, action: AnyAction): AuthUserDataType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.userData,
			}
		default:
			return state
	}
}

export type UsersActionsType = setAuthUserDataACType

type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userData: AuthUserDataType) => {
	return {
		type: SET_USER_DATA,
		userData,
	} as const
}

export default authReduser
