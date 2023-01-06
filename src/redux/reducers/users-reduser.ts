import { AnyAction } from '@reduxjs/toolkit'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

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
	page: number
	currentPage: number
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
	totalCount: 0,
	error: '',
	page: 100,
	currentPage: 1,
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
				items: [...action.items],
			}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalCount: action.totalCount,
			}
		}
		default:
			return state
	}
}

export type UsersActionsType =
	| FollowACType
	| unfollowACType
	| SetUsersACType
	| SetCurrentPageACType
	| SetTotalUsersCountACType

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

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage,
	}
}

type SetTotalUsersCountACType = ReturnType<typeof SetTotalUsersCountAC>
export const SetTotalUsersCountAC = (totalCount: number) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalCount,
	}
}

export default usersReduser
