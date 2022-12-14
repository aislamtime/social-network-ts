import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Content.module.css';
import { Profile } from '../Profile/Profile';
import { Dialogs } from '../Dialogs/Dialogs';
import { News } from '../News/News';
import { Music } from '../Music/Music';
import { Settings } from '../Settings/Settings';
import { AllActionsType, StateType } from '../../redux/store';

type ContentPropsType = {
    state: StateType;
    dispatch: (action: AllActionsType) => void;
};

export function Content(props: ContentPropsType) {
    return (
        <div className={s.content}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                    }
                />
                <Route
                    path='/dialogs'
                    element={
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />
                    }
                />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    );
}
