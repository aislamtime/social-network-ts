import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, UsersType, UserType } from '../../redux/reducers/users-reduser'
import { Users } from './Users'

const mapStateToProps = (state: UsersType) => ({ users: state.users })
const mapDispatchToProps = (dispatch: any) => ({
	follow: (userId: string) => dispatch(followAC(userId)),
	unfollow: (userId: string) => dispatch(unfollowAC(userId)),
	setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
})

export const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(Users)
