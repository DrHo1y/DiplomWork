import { BrowserRouter as Router} from 'react-router-dom'
import React from 'react'
import { NavBar } from './components/Navbar'
import { UseRoutes } from './routes'
import 'materialize-css'

function App() {
  return (
    <Router>
      <NavBar />
      <UseRoutes />
    </Router>
  )
}

export default App
