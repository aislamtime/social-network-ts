import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { ProfileType, setUserProfileAC } from '../../redux/reducers/profile-reduser'
import { RootStateType } from '../../redux/store'
import { Profile } from './Profile'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {
  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.userId}`,
      )
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

export type ProfilePropsType = (ReturnType<typeof mstp> & ReturnType<typeof mdtp>) | any //! fix

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

function withRouter(Component: any) {
  //! fix type
  function ComponentWithRouterProp(props: ProfilePropsType) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

export default connect(mstp, mdtp)(withRouter(ProfileContainer))
