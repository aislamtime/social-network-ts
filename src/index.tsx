import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/state';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.getState()} addPost={store.addPost} />
			</BrowserRouter>
		</React.StrictMode>
	);
};

rerenderEntireTree();

store.render(rerenderEntireTree);

reportWebVitals();
