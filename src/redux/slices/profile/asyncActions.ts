import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProfileType } from './types'

export const fetchUserProfile = createAsyncThunk<ProfileType, string>(
  'profile/fetchUserProfile',
  async (userId) => {
    const { data } = await axios.get<ProfileType>(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
      {
        withCredentials: true,
      },
    )
    return data
  },
)
