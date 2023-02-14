export type AuthStateType = {
  data: AuthActionsType
  isAuth: boolean
}
export type AuthActionsType = {
  id: number
  email: string
  login: string
}
export type AuthResponseType = {
  data: AuthActionsType
  message: string[]
  fieldsErrors: string[]
  resultCode: number
}
