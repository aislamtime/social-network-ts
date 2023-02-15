import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserProfile } from './asyncActions'
import { ProfilePageType, ProfileType } from './types'

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

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost(state) {
      const newPost = {
        id: 5, //!fix
        message: state.newPostText,
        likesCount: 0,
      }
      state.posts.push(newPost)
    },
    changeNewPostText(state, action: PayloadAction<string>) {
      state.newPostText = action.payload
    },
    setUserProfile(state, action: PayloadAction<ProfileType>) {
      state.profile = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
      state.profile = action.payload
    })
  },
})

export const { addPost, changeNewPostText, setUserProfile } = profileSlice.actions

export default profileSlice.reducer
