import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { AllActionsType, StateType } from './redux/store';

type AppProps = {
    state: StateType;
    dispatch: (action: AllActionsType) => void;
};

function App(props: AppProps) {
    return (
        <div className='app-wrapper'>
            <Header />
            <Sidebar />
            <Content state={props.state} dispatch={props.dispatch} />
        </div>
    );
}

export default App;
