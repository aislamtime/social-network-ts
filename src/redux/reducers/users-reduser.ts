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
	firstName: string
	secondName: string
	status: string
	location: LocationType
}
export type UsersType = {
	users: Array<UserType>
}

const initialState: UsersType = {
	users: [
		//{
		//	id: '1',
		//	followed: false,
		//	firstName: 'Alex',
		//	secondName: 'Snow',
		//	status: 'I am a boss',
		//	location: { city: 'New York', country: 'USA' },
		//},
		//{
		//	id: '2',
		//	followed: true,
		//	firstName: 'John',
		//	secondName: 'Pitt',
		//	status: 'I am a boss too?',
		//	location: { city: 'Paris', country: 'France' },
		//},
		//{
		//	id: '2',
		//	followed: false,
		//	firstName: 'Nik',
		//	secondName: 'Colson',
		//	status: 'I am a boss too ahahaha',
		//	location: { city: 'Miami', country: 'USA' },
		//},
	],
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
				...state,
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
