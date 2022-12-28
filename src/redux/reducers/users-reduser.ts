import { Reducer } from '@reduxjs/toolkit'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type UserLocationType = {
	city: string
	country: string
}
export type UserType = {
	id: string
	followed: boolean
	photoUrl: string
	firstName: string
	secondName: string
	status: string
	location: UserLocationType
}
export type UsersPageType = {
	users: Array<UserType>
}

const initialState: UsersPageType = {
	users: [],
}

const usersReduser: Reducer<UsersPageType, UsersActionsType> = (
	state: UsersPageType = initialState,
	action: UsersActionsType,
): UsersPageType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) return { ...u, followed: true }
					else return u
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) return { ...u, followed: false }
					else return u
				}),
			}
		case SET_USERS:
			return {
				users: [...state.users, ...action.users],
			}
		default:
			return state
	}
}

export type UsersActionsType = FollowACType | unfollowACType | SetUsersACType

export type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
	return {
		type: FOLLOW,
		userId: userId,
	} as const
}

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
	return {
		type: UNFOLLOW,
		userId: userId,
	} as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
	return {
		type: SET_USERS,
		users: users,
	} as const
}

export default usersReduser
