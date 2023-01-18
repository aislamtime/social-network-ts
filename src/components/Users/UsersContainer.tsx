import { Dispatch } from '@reduxjs/toolkit'
import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../api/api'
import {
	follow,
	setUsers,
	unfollow,
	UserType,
	setCurrentPage,
	setTotalUsersCount,
	setIsFetching,
	toggleFollowingProgress,
	getUsers,
	getUsersThunkType,
} from '../../redux/reducers/users-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'

class UsersContainer extends React.Component<UsersPropsType, {}> {
	componentDidMount(): void {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
		//if (this.props.items.length === 0) {
		//	this.props.setIsFetching(true)
		//	usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
		//		this.props.setIsFetching(false)
		//		this.props.setUsers(data.items)
		//		this.props.setTotalUsersCount(data.totalCount)
		//	})
		//}
	}
	onPageNumberChange = (currentPage: number) => {
		this.props.getUsers(currentPage, this.props.pageSize)
		//this.props.setIsFetching(true)
		//this.props.setCurrentPage(currentPage)
		//usersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
		//	this.props.setIsFetching(false)
		//	this.props.setUsers(data.items)
		//})
	}

	render() {
		return (
			<div>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						onPageNumberChange={this.onPageNumberChange}
						unfollow={this.props.unfollow}
						follow={this.props.follow}
						items={this.props.items}
						totalCount={this.props.totalCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						followers={this.props.followers}
						toggleFollowingProgress={this.props.toggleFollowingProgress}
					/>
				)}
			</div>
		)
	}
}

export type UsersPropsType = (ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) | any //! fix

const mapStateToProps = (state: RootStateType) => {
	return {
		items: state.usersPage.items,
		totalCount: state.usersPage.totalCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followers: state.usersPage.followers,
	} as const
}

//! fix types
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		follow: (userId: number) => dispatch(follow(userId)),
		unfollow: (userId: number) => dispatch(unfollow(userId)),
		setUsers: (items: Array<UserType>) => dispatch(setUsers(items)),
		setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
		setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount(totalCount)),
		setIsFetching: (isFetching: boolean) => dispatch(setIsFetching(isFetching)),
		toggleFollowingProgress: (userId: number, isFetching: boolean) =>
			dispatch(toggleFollowingProgress(userId, isFetching)),
		//getUsers: (currentPage: number, pageSize: number) => getUsersThunkType,
	} as const
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	setIsFetching,
	toggleFollowingProgress,
	getUsers,
})(UsersContainer)
