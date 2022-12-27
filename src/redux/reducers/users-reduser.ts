import { AllActionsType, ProfilePageType } from '../store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type LocationType = {
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
	location: LocationType
}
export type UsersType = {
	users: Array<UserType>
}

const initialState: UsersType = {
	users: [],
}

export const usersReduser = (state: UsersType = initialState, action: AllActionsType): UsersType => {
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
