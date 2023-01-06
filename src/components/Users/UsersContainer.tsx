import { Dispatch } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	UserType,
	setCurrentPageAC,
	SetTotalUsersCountAC,
} from '../../redux/reducers/users-reduser'
import { RootStateType } from '../../redux/redux-store'
import { UsersC } from './UsersC'

type MapStatePropsType = {
	items: Array<UserType>
	totalCount: number
	page: number
	currentPage: number
}
type MapDispatchPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
	//console.log(state.usersPage.items)

	return {
		items: state.usersPage.items,
		totalCount: state.usersPage.totalCount,
		page: state.usersPage.page,
		currentPage: state.usersPage.currentPage,
	}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
	follow: (userId: number) => dispatch(followAC(userId)),
	unfollow: (userId: number) => dispatch(unfollowAC(userId)),
	setUsers: (items: Array<UserType>) => dispatch(setUsersAC(items)),
	setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
	setTotalUsersCount: (totalCount: number) => dispatch(SetTotalUsersCountAC(totalCount)),
})

export const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
