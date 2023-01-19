import { Dispatch } from '@reduxjs/toolkit'
import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/reducers/users-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'

class UsersContainer extends React.Component<UsersPropsType, {}> {
	componentDidMount(): void {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageNumberChange = (currentPage: number) => {
		this.props.getUsers(currentPage, this.props.pageSize)
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
		setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
		getUsers: (currentPage: number, pageSize: number) => getUsers(currentPage, pageSize),
		follow: (userId: number) => follow(userId),
		unfollow: (userId: number) => unfollow(userId),
	} as const
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	getUsers,
})(UsersContainer)
