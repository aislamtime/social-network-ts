import { connect } from 'react-redux'
import { addPostAC, changeNewPostTextAC } from '../../../redux/reducers/profile-reduser'
import { RootStateType } from '../../../redux/redux-store'
import { MyPosts } from './MyPosts'

const mapStateToProps = (state: RootStateType) => ({
	posts: state.profilePage.posts,
	inputValue: state.profilePage.newPostText,
})
const mapDispatchToProps = (dispatch: any) => {
	return {
		addPost: () => {
			dispatch(addPostAC())
			console.log('add post')
		},
		changeNewPostText: (newText: string) => dispatch(changeNewPostTextAC(newText)),
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
