import React from 'react'
import { UserType } from '../../redux/reducers/users-reduser'

type UsersPropsType = {
	users: Array<UserType>
	follow: (userId: string) => void
	unfollow: (userId: string) => void
	setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
	return <div>USERS WILL BE HERE</div>
}
