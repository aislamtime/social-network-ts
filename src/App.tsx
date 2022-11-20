import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { RootStateType } from './redux/state';

type AppProps = {
	state: RootStateType;
};

function App(props: AppProps) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Sidebar />
			<Content state={props.state} />
		</div>
	);
}

export default App;
