import { Dispatch } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { addPostAC, changeNewPostTextAC } from '../../../redux/reducers/profile-reduser'
import { RootStateType } from '../../../redux/store'
import { MyPosts } from './MyPosts'

export type MyPostsPropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: RootStateType) =>
  ({
    posts: state.profilePage.posts,
    inputValue: state.profilePage.newPostText,
  } as const)

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    addPost: () => dispatch(addPostAC()),
    changeNewPostText: (newText: string) => dispatch(changeNewPostTextAC(newText)),
  } as const)

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
