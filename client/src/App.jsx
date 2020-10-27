import React from 'react'
import { MyFooter } from './component/myFooter'
import { Navbar } from './component/navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    
      
      <Router>
        <div className="wrapper">
        <Navbar />
        {routes}
        <MyFooter />
        </div>
      </Router>
      
    
  )
}

export default App
