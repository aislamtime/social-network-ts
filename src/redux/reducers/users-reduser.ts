import { AnyAction } from '@reduxjs/toolkit'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type UserPhotosType = {
	small: string
	large: string
}
export type UserType = {
	id: number
	name: string
	followed: boolean
	photos: UserPhotosType
	status: string
}
export type UsersPageType = {
	items: Array<UserType>
	totalCount: number
	error: string
}

const initialState: UsersPageType = {
	items: [
		//{
		//	name: 'Shubert',
		//	id: 1,
		//	photos: {
		//		small: '',
		//		large: '',
		//	},
		//	status: '',
		//	followed: false,
		//},
		//{
		//	name: 'Hacker',
		//	id: 2,
		//	photos: {
		//		small: '',
		//		large: '',
		//	},
		//	status: '',
		//	followed: false,
		//},
	],
	totalCount: 30,
	error: '',
}

const usersReduser = (state: UsersPageType = initialState, action: AnyAction): UsersPageType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				items: state.items.map((u) => {
					if (u.id === action.userId) return { ...u, followed: true }
					else return u
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				items: state.items.map((u) => {
					if (u.id === action.userId) return { ...u, followed: false }
					else return u
				}),
			}
		case SET_USERS:
			return {
				...state,
				items: [...state.items, ...action.items],
			}
		default:
			return state
		//throw new Error('BAD ACTION TYPE')
	}
}

export type UsersActionsType = FollowACType | unfollowACType | SetUsersACType

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
	return {
		type: FOLLOW,
		userId: userId,
	} as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
	return {
		type: UNFOLLOW,
		userId: userId,
	} as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (items: Array<UserType>) => {
	return {
		type: SET_USERS,
		items,
	} as const
}

export default usersReduser
