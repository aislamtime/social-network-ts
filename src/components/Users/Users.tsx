import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
//import { UserType } from '../../redux/reducers/users-reduser'
import { usersSelector } from '../../redux/slices/users/selectors'
import { useAppDispatch } from '../../redux/store'
import { follow, getUsers, unfollow } from '../../redux/slices/users/asyncActions'

//export type UsersPropsType = {
//  onPageNumberChange: (page: number) => void
//  unfollow: (userId: number) => void
//  follow: (userId: number) => void
//  items: Array<UserType>
//  totalCount: number
//  pageSize: number
//  currentPage: number
//  followers: number[]
//}

export const Users: React.FC = () => {
  const { items, currentPage, pageSize, totalCount, followers } = useSelector(usersSelector)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getUsers({ currentPage, pageSize }))
  }, [])

  let pagesCount = Math.ceil(totalCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const onFollowClick = (id: number) => dispatch(follow(id))
  const onUnfollowClick = (id: number) => dispatch(unfollow(id))
  const onPageNumberChange = (page: number, size: number) =>
    dispatch(getUsers({ currentPage: page, pageSize: size }))

  return (
    <div className={s.main}>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={`${currentPage === p ? s.selected : ''} ${s.changePage}`}
              onClick={() => {
                onPageNumberChange(p, pageSize)
              }}>
              {p}
            </span>
          )
        })}
      </div>
      {items.map((u) => {
        return (
          <div key={u.id} className={s.user}>
            <div className={s.ava_and_btn}>
              <div className={s.user_photo}>
                <NavLink to={`/profile/${u.id}`}>
                  <img src={u.photos.small ? u.photos.small : userPhoto} alt='photo' />
                </NavLink>
              </div>
              {u.followed ? (
                <button
                  disabled={followers.some((id) => id === u.id)}
                  className={s.follow_btn}
                  onClick={() => {
                    onUnfollowClick(u.id)
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followers.some((id) => id === u.id)}
                  className={s.follow_btn}
                  onClick={() => {
                    onFollowClick(u.id)
                  }}>
                  Follow
                </button>
              )}
            </div>
            <div className={s.descr}>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
              <div className={s.city}>{'should be city here'}</div>
              <div className={s.country}>{'should be country here'}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
