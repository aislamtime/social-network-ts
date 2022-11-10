import React from 'react';
import s from './Profile.module.css';

export function Profile() {
  return (
    <div className={s.profile}>
      <div className={s.cover}><img src="" alt="" /></div>
      <div className="profile__info">
        <div className={s.avatar}><img src="https://cdn.dribbble.com/users/3030608/screenshots/15223665/media/ecd75381aa7a354c78a4ed2aee65bd0f.jpg?compress=1&resize=400x300&vertical=top" alt="" /></div>
        <div className="profile__description"></div>
      </div>
      <div className="profile__posts posts">
        <div className="posts__title">My posts</div>
        <div className="posts__add">
          <input type="text" className="new-post" /><button className="add-new-post btn">Send</button>
        </div>
        <div className="posts__items">

          <div className="posts__item"><img src="" alt="" className="posts-item__avatar" />
            <div className="posts-item__descr">Hey, why nobody love me?</div></div>

          <div className="posts__item"><img src="" alt="" className="posts-item__avatar" />
            <div className="posts-item__descr">It's our new program! Hey!</div></div>

        </div>
      </div>
    </div>
  );
}
