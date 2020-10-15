import { Router } from 'express'
import React from 'react'
import { NavBar } from './components/Navbar'
import { UseRoutes } from './routes'

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container'>
        <UseRoutes/>
      </div>
    </Router>
  )
}

export default App
