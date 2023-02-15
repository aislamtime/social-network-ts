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
