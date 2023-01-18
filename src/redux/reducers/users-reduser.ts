import { Action, ActionCreator, AnyAction, Dispatch, ThunkAction } from '@reduxjs/toolkit'
import { usersAPI } from '../../api/api'
import { RootStateType } from '../redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const TOGGLE_FOLLOEING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

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
	pageSize: number
	currentPage: number
	isFetching: boolean
	followers: Array<number>
}

const initialState: UsersPageType = {
	items: [],
	totalCount: 0,
	error: '',
	pageSize: 100,
	currentPage: 1,
	isFetching: false,
	followers: [],
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
		case SET_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case TOGGLE_FOLLOEING_IN_PROGRESS: {
			return {
				...state,
				followers: action.isFetching
					? [...state.followers, action.userId]
					: state.followers.filter((id) => id != action.userId),
			}
		}
		default:
			return state
	}
}

export type ActionsType =
	| FollowACType
	| unfollowACType
	| SetUsersACType
	| SetCurrentPageACType
	| SetTotalUsersCountACType
	| SetIsFetchingACType
	| ToggleFollowingProgressACType

type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
	return {
		type: FOLLOW,
		userId: userId,
	} as const
}

type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
	return {
		type: UNFOLLOW,
		userId: userId,
	} as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (items: Array<UserType>) => {
	return {
		type: SET_USERS,
		items,
	} as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage,
	}
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalCount,
	}
}

type SetIsFetchingACType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {
	return {
		type: SET_IS_FETCHING,
		isFetching,
	} as const
}

type ToggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (userId: number, isFetching: boolean) => {
	return {
		type: TOGGLE_FOLLOEING_IN_PROGRESS,
		userId,
		isFetching,
	}
}

//! ------------ THUNKS ------------

export type getUsersThunkType = ThunkAction<void, RootStateType, unknown, ActionsType>
export const getUsers =
	(currentPage: number, pageSize: number): getUsersThunkType =>
	(dispatch) => {
		dispatch(setIsFetching(true))
		dispatch(setCurrentPage(currentPage))
		usersAPI.getUsers(currentPage, pageSize).then((data) => {
			dispatch(setIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}

export default usersReduser
