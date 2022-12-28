import { Dispatch } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, UserType } from '../../redux/reducers/users-reduser2'
import { RootStateType } from '../../redux/redux-store'
import { Users } from './Users'

type MapStatePropsType = {
	users: Array<UserType>
}
type MapDispatchPropsType = {
	follow: (userId: string) => void
	unfollow: (userId: string) => void
	setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({ users: state.usersPage.users })
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
	follow: (userId: string) => dispatch(followAC(userId)),
	unfollow: (userId: string) => dispatch(unfollowAC(userId)),
	setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
})

export const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(Users)
