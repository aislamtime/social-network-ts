export type MessageType = {
  id: string
  message: string
}
export type DialogType = {
  id: string
  name: string
}
export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
}
