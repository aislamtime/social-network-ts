import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/redux-store'
import { StateType } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const rerenderEntireTree = (state: StateType) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>,
	)
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
	rerenderEntireTree(store.getState())
})

reportWebVitals()
