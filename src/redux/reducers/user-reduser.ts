const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserLocationType = {
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
	users: [
		{
			id: '1',
			followed: false,
			photoUrl: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg',
			firstName: 'Alex',
			secondName: 'Snow',
			status: 'I am a boss',
			location: { city: 'New York', country: 'USA' },
		},
		{
			id: '2',
			followed: true,
			photoUrl: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg',
			firstName: 'John',
			secondName: 'Pitt',
			status: 'I am a boss too?',
			location: { city: 'Paris', country: 'France' },
		},
		{
			id: '3',
			followed: false,
			photoUrl: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg',
			firstName: 'Nik',
			secondName: 'Colson',
			status: 'I am a boss too ahahaha',
			location: { city: 'Miami', country: 'USA' },
		},
	],
}

const usersReduser = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
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
			throw new Error('BAD ACTION TYPE')
	}
}

type UsersActionsType = FollowACType | unfollowACType | SetUsersACType
type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
	return {
		type: FOLLOW,
		userId: userId,
	} as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
	return {
		type: UNFOLLOW,
		userId: userId,
	} as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
	return {
		type: SET_USERS,
		users: users,
	} as const
}

export default usersReduser
