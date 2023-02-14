import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAuthData } from './asyncActions'
import { AuthResponseType, AuthStateType } from './types'

const initialState: AuthStateType = {
  data: { id: 0, email: '', login: '' },
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAuthData.fulfilled, (state, action: PayloadAction<AuthResponseType>) => {
      if (action.payload.resultCode === 0) {
        state.data = action.payload.data
        state.isAuth = true
      }
    })
  },
})

//export const { setUserData } = authSlice.actions

export default authSlice.reducer
