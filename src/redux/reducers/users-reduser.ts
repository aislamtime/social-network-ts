import { ThunkAction } from '@reduxjs/toolkit'
import { usersAPI } from '../../api/api'
import { RootStateType } from '../store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const TOGGLE_FOLLOEING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

type UserPhotosType = {
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
export type UsersPageType = {
  items: Array<UserType>
  totalCount: number
  error: string
  pageSize: number
  currentPage: number
  isFetching: boolean
  followers: Array<number>
}

const initialState: UsersPageType = {
  items: [],
  totalCount: 0,
  error: '',
  pageSize: 100,
  currentPage: 1,
  isFetching: false,
  followers: [],
}

export const usersReduser = (state: UsersPageType = initialState, action: any): UsersPageType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        items: state.items.map((u) => {
          if (u.id === action.userId) return { ...u, followed: true }
          else return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        items: state.items.map((u) => {
          if (u.id === action.userId) return { ...u, followed: false }
          else return u
        }),
      }
    case SET_USERS:
      return {
        ...state,
        items: [...action.items],
      }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount,
      }
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    case TOGGLE_FOLLOEING_IN_PROGRESS: {
      return {
        ...state,
        followers: action.isFetching
          ? [...state.followers, action.userId]
          : state.followers.filter((id) => id != action.userId),
      }
    }
    default:
      return state
  }
}

type ActionTypes =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => {
  return {
    type: FOLLOW,
    userId,
  } as const
}

export const unfollowSuccess = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId,
  } as const
}

export const setUsers = (items: Array<UserType>) => {
  return {
    type: SET_USERS,
    items,
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}

export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  }
}

export const setIsFetching = (isFetching: boolean) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  } as const
}

export const toggleFollowingProgress = (userId: number, isFetching: boolean) => {
  return {
    type: TOGGLE_FOLLOEING_IN_PROGRESS,
    userId,
    isFetching,
  }
}

//! ------------ THUNKS ------------

export type ThunksType = ThunkAction<void, RootStateType, unknown, ActionTypes>
export const getUsers =
  (currentPage: number, pageSize: number): ThunksType =>
  (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }

export const follow =
  (userId: number): ThunksType =>
  (dispatch) => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) dispatch(followSuccess(userId))
      dispatch(toggleFollowingProgress(userId, false))
    })
  }

export const unfollow =
  (userId: number): ThunksType =>
  (dispatch) => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
      dispatch(toggleFollowingProgress(userId, false))
    })
  }
