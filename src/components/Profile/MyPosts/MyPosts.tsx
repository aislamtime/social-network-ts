import React from 'react'
import { useSelector } from 'react-redux'

import { profileSelector } from '../../../redux/slices/profile/selectors'
import { addPost, changeNewPostText } from '../../../redux/slices/profile/slice'
import { useAppDispatch } from '../../../redux/store'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts: React.FC = () => {
  const { posts, newPostText } = useSelector(profileSelector)
  const dispatch = useAppDispatch()

  const postsElements = posts.map((el) => <Post key={el.id} state={el} />)

  return (
    <div className={s.myPosts}>
      <div className={s.myPostsTitle}>My posts</div>
      <div className={s.inputAndButton}>
        <textarea
          className={s.input}
          value={newPostText}
          onChange={(e) => dispatch(changeNewPostText(e.currentTarget.value))}
        />
        <button className={s.buttonSend} onClick={() => dispatch(addPost)}>
          Send
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}
