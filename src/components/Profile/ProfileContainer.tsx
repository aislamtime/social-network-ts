import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { ProfileType, setUserProfileAC } from '../../redux/reducers/profile-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Profile } from './Profile'

class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {
	componentDidMount(): void {
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((response) => {
			this.props.setUserProfile(response.data)
		})
	}

	render() {
		return <Profile profile={this.props.profile} />
	}
}

export type ProfilePropsType = ReturnType<typeof mstp> & ReturnType<typeof mdtp>

const mstp = (state: RootStateType) => {
	return {
		profile: state.profilePage.profile,
	} as const
}
const mdtp = (dispatch: Dispatch) => {
	return {
		setUserProfile: (profile: ProfileType) => dispatch(setUserProfileAC(profile)),
	} as const
}
export default connect(mstp, mdtp)(ProfileContainer)
