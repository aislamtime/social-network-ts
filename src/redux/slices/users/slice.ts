import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUsers, follow } from './asyncActions'
import { UsersPageType, UserType } from './types'

const initialState: UsersPageType = {
  items: [],
  totalCount: 0,
  error: '',
  pageSize: 100,
  currentPage: 1,
  isFetching: false,
  followers: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    followSuccess(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, followed: true } : item,
      )
    },
    unfollowSuccess(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, followed: false } : item,
      )
    },
    setUsers(state, action: PayloadAction<UserType[]>) {
      state.items = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload
    },
    toggleFollowingInProgress(
      state,
      action: PayloadAction<{ userId: number; isFetching: boolean }>,
    ) {
      state.followers = action.payload.isFetching
        ? [...state.followers, action.payload.userId]
        : state.followers.filter((id) => id != action.payload.userId)
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action: PayloadAction<any>) => {
      //! fix
    })
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
      //! fix
    })
    builder.addCase(follow.pending, (state, action: PayloadAction<any>) => {})
  },
})

export const {
  followSuccess,
  unfollowSuccess,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleFollowingInProgress,
} = usersSlice.actions
export default usersSlice.reducer
