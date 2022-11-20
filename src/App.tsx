import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';

type DialogsType = {
	id: number;
	name: string;
};
type MessagesType = {
	id: number;
	message: string;
};
type PostsType = {
	id: number;
	message: string;
	likeCount: number;
};

type AppType = {
	dialogs: Array<DialogsType>;
	messages: Array<MessagesType>;
	posts: Array<PostsType>;
};

function App(props: AppType) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Sidebar />
			<Content
				posts={props.posts}
				dialogs={props.dialogs}
				messages={props.messages}
			/>
		</div>
	);
}

export default App;
