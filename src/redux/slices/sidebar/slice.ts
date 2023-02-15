import { createSlice } from '@reduxjs/toolkit'

import { SidebarStateType } from './types'

const initialState: SidebarStateType = {}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
})

export const {} = sidebarSlice.actions
export default sidebarSlice.reducer
