import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
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
import { Users } from './Users'

class UsersContainer extends React.Component<UsersPropsType, UserType[]> {
	componentDidMount(): void {
		if (this.props.items.length === 0) {
			axios
				.get(
					`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.page}`,
				)
				.then((response) => {
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
		}
	}
	onPageNumberChange = (currentPage: number) => {
		this.props.setCurrentPage(currentPage)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.page}`)
			.then((response) => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<Users
				onPageNumberChange={this.onPageNumberChange}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				items={this.props.items}
				totalCount={this.props.totalCount}
				page={this.props.page}
				currentPage={this.props.currentPage}
			/>
		)
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
