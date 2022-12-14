import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store, StoreType } from './redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                {/* Прокидывая addPost надо его забайндить на store, что бы при вызове метода addPost из другого файла, this не изменился */}
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree();

store.render(rerenderEntireTree);

reportWebVitals();
