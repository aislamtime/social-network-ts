export type UserPhotosType = {
  small: string
  large: string
}
export type UserType = {
  id: number
  name: string
  followed: boolean
  photos: UserPhotosType
  status: string
}
export type UsersResponceType = {
  items: UserType[]
  totalCount: number
  error: string
}
export type UsersPageType = UsersResponceType & {
  pageSize: number
  currentPage: number
  isFetching: boolean
  followers: Array<number>
}
