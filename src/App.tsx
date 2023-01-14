import React from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Content } from './components/Content/Content'
import HeaderContainer from './components/Header/HeaderContainer'

function App() {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Sidebar />
			<Content />
		</div>
	)
}

export default App
