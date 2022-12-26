import { AllActionsType, ProfilePageType } from '../store'

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

const initialState = {
	posts: [
		{ id: 1, message: 'I am from Mars', likesCount: 13 },
		{ id: 2, message: 'My name is Alesha', likesCount: 18 },
		{ id: 3, message: 'Hi, how are you?', likesCount: 16 },
		{ id: 4, message: "Hey, it's my first app! ", likesCount: 32 },
	],
	newPostText: '',
}

const profileReduser = (state: ProfilePageType = initialState, action: AllActionsType) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			}
			return {
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
		default:
			return state
	}
}

export type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
	return {
		type: ADD_POST,
	} as const
}

export type ChangeNewPostTextACType = ReturnType<typeof changeNewPostTextAC>
export const changeNewPostTextAC = (changePostText: string) => {
	return {
		type: CHANGE_NEW_POST_TEXT,
		changePostText: changePostText,
	} as const
}

export default profileReduser
