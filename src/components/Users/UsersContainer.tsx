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
	setTotalUsersCountAC,
	setIsFetchingAC,
} from '../../redux/reducers/users-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'

class UsersContainer extends React.Component<UsersPropsType, UserType[]> {
	componentDidMount(): void {
		if (this.props.items.length === 0) {
			this.props.setIsFetching(true)
			axios
				.get(
					`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
				)
				.then((response) => {
					this.props.setIsFetching(false)
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
		}
	}
	onPageNumberChange = (currentPage: number) => {
		this.props.setIsFetching(true)
		this.props.setCurrentPage(currentPage)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.setIsFetching(false)
				this.props.setUsers(response.data.items)
			})
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
					/>
				)}
			</div>
		)
	}
}

type MapStatePropsType = {
	items: Array<UserType>
	totalCount: number
	pageSize: number
	currentPage: number
	isFetching: boolean
}
type MapDispatchPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	setIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
	return {
		items: state.usersPage.items,
		totalCount: state.usersPage.totalCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
	follow: (userId: number) => dispatch(followAC(userId)),
	unfollow: (userId: number) => dispatch(unfollowAC(userId)),
	setUsers: (items: Array<UserType>) => dispatch(setUsersAC(items)),
	setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
	setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
	setIsFetching: (isFetching: boolean) => dispatch(setIsFetchingAC(isFetching)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
