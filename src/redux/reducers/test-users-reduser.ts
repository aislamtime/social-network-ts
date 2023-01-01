const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type LocationType = {
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
export type UsersPageType = {
	users: UserType[]
}

const initialState: UsersPageType = {
	users: [
		{
			id: '1',
			followed: false,
			photoUrl: 'url should be here',
			firstName: 'Alex',
			secondName: 'King',
			status: 'I am a programmer',
			location: {
				city: 'Grozny',
				country: 'Chechen Repoublic',
			},
		},
		{
			id: '2',
			followed: false,
			photoUrl: 'url should be here',
			firstName: 'Not Alex',
			secondName: 'King',
			status: 'I am a programmer',
			location: {
				city: 'Grozny',
				country: 'Chechen Repoublic',
			},
		},
		{
			id: '2',
			followed: false,
			photoUrl: 'url should be here',
			firstName: 'Not Alex Too',
			secondName: 'King',
			status: 'I am a programmer',
			location: {
				city: 'Grozny',
				country: 'Chechen Repoublic',
			},
		},
	],
}

const testUsersReduser = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					} else return u
				}),
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					} else return u
				}),
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users],
			}
		}
		default:
			throw new Error('BAD ACTION TYPE')
	}
}

export type UsersActionsType = followACType | UnfollowACType | SetUsersType

type followACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
	return {
		type: FOLLOW,
		userId,
	} as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
	return {
		type: UNFOLLOW,
		userId,
	} as const
}

type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
	return {
		type: SET_USERS,
		users,
	} as const
}

export default testUsersReduser
