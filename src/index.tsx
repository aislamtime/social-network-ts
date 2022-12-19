import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/redux-store';
import { StateType } from './redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                {/* Прокидывая addPost надо его забайндить на store, что бы при вызове метода addPost из другого файла, this не изменился */}
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState())
});

reportWebVitals();
