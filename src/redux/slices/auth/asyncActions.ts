import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthResponseType } from './types'

export const fetchAuthData = createAsyncThunk<AuthResponseType, any>(
  'auth/fetchAuthData',
  async () => {
    const { data } = await axios.get<AuthResponseType>(
      `https://social-network.samuraijs.com/api/1.0/auth/me`,
      {
        withCredentials: true,
      },
    )
    console.log(data)

    return data
  },
)
