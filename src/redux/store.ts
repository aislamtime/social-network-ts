import dialogsReduser, { ChangeMessageTextACType, SendMessageACType } from './reducers/dialogs-reduser'
import profileReduser, { AddPostACType, ChangeNewPostTextACType } from './reducers/profile-reduser'
import sidebarReduser from './reducers/sidebar-reduser'
import { FollowACType, UnFollowACType } from './reducers/users-reduser'

export type MessageType = {
	id: number
	message: string
}
export type DialogType = {
	id: number
	name: string
}
export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type DialogsPageType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
	newMessageText: string
}
export type ProfilePageType = {
	posts: Array<PostType>
	newPostText: string
}
export type SidebarType = {}
export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sidebar: SidebarType
}
export type StoreType = {
	_state: StateType
	_onChange: () => void
	render: (callBack: () => void) => void
	getState: () => StateType
	dispatch: (action: AllActionsType) => void
}

//=======================Actions Types============================

export type AllActionsType =
	| AddPostACType
	| ChangeMessageTextACType
	| SendMessageACType
	| ChangeNewPostTextACType
	| FollowACType
	| UnFollowACType

export const store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'I am from Mars', likesCount: 13 },
				{ id: 2, message: 'My name is Alesha', likesCount: 18 },
				{ id: 3, message: 'Hi, how are you?', likesCount: 16 },
				{ id: 4, message: "Hey, it's my first app! ", likesCount: 32 },
			],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Andrey' },
				{ id: 2, name: 'Nikita' },
				{ id: 3, name: 'Sasha' },
				{ id: 4, name: 'Nika' },
				{ id: 5, name: 'Tima' },
				{ id: 6, name: 'Nastya' },
			],
			messages: [
				{ id: 1, message: 'Hi!' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Yo! Wats up? ' },
				{ id: 4, message: 'Yo' },
			],
			newMessageText: '',
		},
		sidebar: {},
	},
	_onChange() {
		console.log('state changed')
	},
	render(callBack: () => void) {
		this._onChange = callBack
	},
	getState() {
		return this._state
	},
	dispatch(action) {
		dialogsReduser(this._state.dialogsPage, action)
		profileReduser(this._state.profilePage, action)
		sidebarReduser(this._state.sidebar, action)

		this._onChange()
	},
}
