import { Dispatch } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, UserType } from '../../redux/reducers/users-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Users } from './UsersC'

type MapStatePropsType = {
	users: Array<UserType>
}
type MapDispatchPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({ users: state.usersPage.items })
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
	follow: (userId: number) => dispatch(followAC(userId)),
	unfollow: (userId: number) => dispatch(unfollowAC(userId)),
	setUsers: (items: Array<UserType>) => dispatch(setUsersAC(items)),
})

export const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(Users)
