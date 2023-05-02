import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Components/HomePage'
import SubCategory from './Components/SubCategory'

const App = () => {
  return (
    <Router>
    <div className='container'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/sub' element={<SubCategory />} />
        </Routes>
      </div>  
    </Router>
  )
}

export default App