import React from 'react'
import { MyFooter } from './component/myFooter'
import { Navbar } from './component/navbar'
import { PopularCategory } from './component/popularCategory'
import { PopularProduct } from './component/popularProduct'


function App() {
  return (
    <div className="app">
      <Navbar />
      <PopularCategory />
      <PopularProduct />
      <MyFooter/>
    </div>
  )
}

export default App
