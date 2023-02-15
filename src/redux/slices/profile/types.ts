export type PostType = {
  id: string
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
