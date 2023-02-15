import { createAsyncThunk } from '@reduxjs/toolkit'
import { usersAPI } from '../../../api/api'
import {
  followSuccess,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  toggleFollowingInProgress,
  unfollowSuccess,
} from './slice'
import { UserType } from './types'

type GetUsersParams = {
  currentPage: number
  pageSize: number
}
export const getUsers = createAsyncThunk<UserType[], GetUsersParams>(
  'users/getUsers',
  async (params, thunkAPI) => {
    const { currentPage, pageSize } = params
    const { dispatch } = thunkAPI

    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const { data } = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

    return data.items //! fix
  },
)

export const follow = createAsyncThunk<any, number>(
  'users/follow',
  async (userId, { dispatch }) => {
    dispatch(toggleFollowingInProgress({ userId, isFetching: true }))
    const { data } = await usersAPI.follow(userId)
    if (data.resultCode === 0) dispatch(followSuccess(userId))
    dispatch(toggleFollowingInProgress({ userId, isFetching: false }))
    return data
  },
)

export const unfollow = createAsyncThunk<boolean, number>(
  'users/unfollow',
  async (userId, { dispatch }) => {
    dispatch(toggleFollowingInProgress({ userId, isFetching: true }))
    const { data } = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
    dispatch(toggleFollowingInProgress({ userId, isFetching: false }))
    return data
  },
)
