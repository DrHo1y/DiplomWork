import React from 'react'
import { MyFooter } from './component/myFooter'
import { Navbar } from './component/navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    <div className="app">
      
      <Router>
        <Navbar />
        {routes}
        <MyFooter />
      </Router>
      
    </div>
  )
}

export default App
