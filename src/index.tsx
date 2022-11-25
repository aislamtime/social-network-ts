//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
import { state, addPost } from './redux/state';
import { rerenderDomTree } from './render';

rerenderDomTree(state, addPost)
