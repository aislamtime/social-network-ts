//import { AllActionsType, DialogsPageType } from '../store'

const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'
const SEDN_MESSAGE = 'SEND-MESSAGE'

export type MessageType = {
	id: number
	message: string
}
export type DialogType = {
	id: number
	name: string
}
export type DialogsPageType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
	newMessageText: string
}

const initialState: DialogsPageType = {
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
}

const dialogsReduser = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
	switch (action.type) {
		case CHANGE_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newMessageText,
			}
		case SEDN_MESSAGE:
			const message = { id: 5, message: state.newMessageText }
			return {
				...state,
				messages: [...state.messages, message],
				newMessageText: '',
			}
		default:
			return state
	}
}

type DialogsActionsType = ChangeMessageTextACType | SendMessageACType

export type ChangeMessageTextACType = ReturnType<typeof changeMessageTextAC>
export const changeMessageTextAC = (newMessageText: string) => {
	return {
		type: CHANGE_MESSAGE_TEXT,
		newMessageText: newMessageText,
	} as const
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
	return {
		type: SEDN_MESSAGE,
	} as const
}

export default dialogsReduser
