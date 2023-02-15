import React from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Content } from './components/Content/Content'
import { Header } from './components'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      {/*<HeaderContainer />*/}
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
