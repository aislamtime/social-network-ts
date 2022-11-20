import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const dialogs = [
	{ id: 1, name: 'Andrey' },
	{ id: 2, name: 'Nikita' },
	{ id: 3, name: 'Sasha' },
	{ id: 4, name: 'Nika' },
	{ id: 5, name: 'Tima' },
	{ id: 6, name: 'Nastya' },
];

const messages = [
	{ id: 1, message: 'Hi!' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'Yo! Wats up?' },
	{ id: 4, message: 'Yo' },
];

const posts = [
	{ id: 1, message: 'I am from Mars', likeCount: 13 },
	{ id: 2, message: 'My name is Alesha', likeCount: 18 },
	{ id: 3, message: 'Hi, how are you?', likeCount: 16 },
	{ id: 4, message: "Hey, it's my first app!", likeCount: 32 },
];

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App dialogs={dialogs} messages={messages} posts={posts} />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
