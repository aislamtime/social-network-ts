import React from 'react'
import { useSelector } from 'react-redux'

import { profileSelector } from '../../redux/slices/profile/selectors'
import { Preloader } from '../common/Preloader/Preloader'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

export const Profile: React.FC = () => {
  const { profile } = useSelector(profileSelector)

  if (!profile) {
    return <Preloader />
  } else {
    return (
      <div className={s.profile}>
        <div className={s.cover}>
          <img src='' />
        </div>
        <div className={s.info}>
          <div className={s.avatar}>
            <img src={profile.photos.large} />
          </div>
          <div className={s.descr}>
            <div className={s.name}>{profile.fullName}</div>
            <div className={s.isWork}>
              <span>Work:</span> {profile.lookingForAJob ? 'В поиске' : 'Работаю'}
            </div>
            <div className={s.workStatus}>
              <span>Skills:</span> {profile.lookingForAJobDescription}
            </div>
            <div className={s.contacts}>
              {profile.contacts.facebook ? (
                <a className={s.contact} href={profile.contacts.facebook}>
                  facebook
                </a>
              ) : (
                ''
              )}
              {profile.contacts.github ? (
                <a className={s.contact} href={profile.contacts.github}>
                  github
                </a>
              ) : (
                ''
              )}
              {profile.contacts.instagram ? (
                <a className={s.contact} href={profile.contacts.instagram}>
                  instagram
                </a>
              ) : (
                ''
              )}
              {profile.contacts.mainLink ? (
                <a className={s.contact} href={profile.contacts.mainLink}>
                  mainLink
                </a>
              ) : (
                ''
              )}
              {profile.contacts.twitter ? (
                <a className={s.contact} href={profile.contacts.twitter}>
                  twitter
                </a>
              ) : (
                ''
              )}
              {profile.contacts.vk ? (
                <a className={s.contact} href={profile.contacts.vk}>
                  vk
                </a>
              ) : (
                ''
              )}
              {profile.contacts.website ? (
                <a className={s.contact} href={profile.contacts.website}>
                  website
                </a>
              ) : (
                ''
              )}
              {profile.contacts.youtube ? (
                <a className={s.contact} href={profile.contacts.youtube}>
                  youtube
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        <MyPosts />
      </div>
    )
  }
}
