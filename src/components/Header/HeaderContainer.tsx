import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setAuthUserDataAC } from '../../redux/reducers/auth-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Header } from './Header'

class HeaderContainer extends React.Component<HeaderPropsType, {}> {
	componentDidMount(): void {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {
			if (response.data.resultCode === 0) {
				const { id, email, login } = response.data.data
				this.props.setAuthUserData(id, email, login)
			}
		})
	}
	render() {
		return <Header {...this.props} />
	}
}

export type HeaderPropsType = ReturnType<typeof mstp> & ReturnType<typeof mdtp>
const mstp = (state: RootStateType) =>
	({
		auth: state.auth,
	} as const)
const mdtp = (dispatch: Dispatch) =>
	({
		setAuthUserData: (userId: number, email: string, login: string) =>
			dispatch(setAuthUserDataAC(userId, email, login)),
	} as const)
export default connect(mstp, mdtp)(HeaderContainer)
