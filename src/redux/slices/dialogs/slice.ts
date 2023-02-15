import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DialogsPageType } from './types'

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
export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    changeMessageText(state, action: PayloadAction<string>) {
      state.newMessageText = action.payload
    },
    sendMessage(state) {
      const message = { id: 5, message: state.newMessageText }
      state.messages.push(message)
      state.newMessageText = ''
    },
  },
})

export const { changeMessageText, sendMessage } = dialogsSlice.actions
export default dialogsSlice.reducer
