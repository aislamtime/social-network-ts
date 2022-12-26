import { AllActionsType, ProfilePageType } from '../store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

type LocationType = {
	city: string
	country: string
}
type UserType = {
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
		{
			id: '1',
			followed: false,
			firstName: 'Alex',
			secondName: 'Snow',
			status: 'I am a boss',
			location: { city: 'New York', country: 'USA' },
		},
		{
			id: '2',
			followed: true,
			firstName: 'John',
			secondName: 'Pitt',
			status: 'I am a boss too?',
			location: { city: 'Paris', country: 'France' },
		},
		{
			id: '2',
			followed: false,
			firstName: 'Nik',
			secondName: 'Colson',
			status: 'I am a boss too ahahaha',
			location: { city: 'Miami', country: 'USA' },
		},
	],
}

export const usersReduser = (state: UsersType = initialState, action: AllActionsType): UsersType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
			}
		}
		case UNFOLLOW: {
			return {
				...state,
			}
		}
		default:
			return state
	}
}

export type FollowACType = ReturnType<typeof followAC>
export const followAC = () => {
	return {
		type: FOLLOW,
	} as const
}

export type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = () => {
	return {
		type: UNFOLLOW,
	} as const
}
