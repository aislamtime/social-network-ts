import React from 'react'
import { PostType } from '../../../../redux/slices/profile/types'
import s from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}

export const Post: React.FC<PropsType> = ({ message, likesCount }) => {
  return (
    <div className={s.post}>
      <div className={s.item}>
        <img
          src='https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
          alt=''
          className={s.avatar}
        />
        <div className={s.text}>{message}</div>
        <div className={s.likesBlock}>
          <img src='https://pngimg.com/uploads/like/like_PNG84.png' className={s.like}></img>
          <div className={s.likesCount}>{likesCount}</div>
        </div>
        {/*<div className={s.delete}>Delete post</div>*/}
      </div>
    </div>
  )
}
