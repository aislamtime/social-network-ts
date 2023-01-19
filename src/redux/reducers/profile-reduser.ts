const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type ProfileContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export type ProfileType = {
	aboutMe: string
	contacts: ProfileContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: {
		small: string
		large: string
	}
}
export type ProfilePageType = {
	profile: ProfileType
	posts: Array<PostType>
	newPostText: string
}

const initialState: ProfilePageType = {
	profile: {
		aboutMe: '',
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: '',
		},
		lookingForAJob: true,
		lookingForAJobDescription: '',
		fullName: '',
		userId: 0,
		photos: {
			small: '',
			large: '',
		},
	},
	posts: [
		{ id: 1, message: 'I am from Mars', likesCount: 13 },
		{ id: 2, message: 'My name is Alesha', likesCount: 18 },
		{ id: 3, message: 'Hi, how are you?', likesCount: 16 },
		{ id: 4, message: "Hey, it's my first app! ", likesCount: 32 },
	],
	newPostText: '',
}

export const profileReduser = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			}
		}
		case CHANGE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.changePostText,
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			}
		}
		default:
			return state
		//throw new Error('BAD ACTION TYPE')
	}
}

export type ActionTypes =
	| ReturnType<typeof addPostAC>
	| ReturnType<typeof changeNewPostTextAC>
	| ReturnType<typeof setUserProfileAC>

export const addPostAC = () => {
	return {
		type: ADD_POST,
	} as const
}

export const changeNewPostTextAC = (changePostText: string) => {
	return {
		type: CHANGE_NEW_POST_TEXT,
		changePostText,
	} as const
}

export const setUserProfileAC = (profile: ProfileType) => {
	return {
		type: SET_USER_PROFILE,
		profile,
	} as const
}
